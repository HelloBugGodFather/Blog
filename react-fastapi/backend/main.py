import base64
from datetime import datetime
from pathlib import Path

import frontmatter
import uvicorn
from fastapi import FastAPI


DOCS = Path(__file__).parent / "docs"
app = FastAPI(docs_url=None, redoc_url=None)


def encode_base64(string: str) -> str:
    return base64.urlsafe_b64encode(string.encode("utf-8")).decode("utf-8").rstrip("=")


def decode_base64(encode: str) -> str:
    padding = 4 - (len(encode) % 4)
    if padding != 4:
        encode = encode + ("=" * padding)
    return base64.urlsafe_b64decode(encode).decode("utf-8")


index = []
for file in DOCS.rglob("*.md"):
    meta = frontmatter.load(str(file)).metadata
    index.append(
        {
            "index": encode_base64(file.relative_to(DOCS).as_posix()),
            "title": meta["title"] if meta.get("title", None) else "",
            "tags": meta["tags"] if meta.get("tags", None) else [],
            "update": datetime.fromtimestamp(file.stat().st_mtime).strftime("%Y-%m-%d %H:%M:%S"),
        }
    )


@app.get("/api/docs/index")
def get_docs_index():
    return {"index": index}


@app.get("/api/docs/{index}")
def get_docs_content(index: str):
    return {"content": frontmatter.load(str(DOCS / decode_base64(index))).content}


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000)
