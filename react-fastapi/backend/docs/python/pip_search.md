---
title: 自制 pip search 工具
tags:
    - pip
    - python
---

# 自制 pip search 工具

> 前因: 官方 pip search 命令已弃用, 为方便自己日常使用, 自制一个简易 pip_search 工具

- **核心API**: https://pypi.org/pypi/包名/json
- **工具打包**: `pyinstaller` 一键打包并自行配置环境变量即可使用

## 完整代码

```python
import json
import sys
import requests

def format_requires(requires_dist: list) -> None:
    for index, require in enumerate(requires_dist):
        if index == 0:
            print(f"{'Requies':<8}: {require}")
        else:
            print(f"{' ' * 9} {require}")

def format_releases(releases: list) -> None:
    chunk_size = 5
    for i in range(0, len(releases), chunk_size):
        chunk = releases[i : i + chunk_size]
        line = ", ".join(chunk)
        if i == 0:
            print(f"{'Release':<8}: {line}")
        else:
            print(f"{' ' * 9} {line}")

def search(package: str) -> None:
    try:
        response: requests.Response = requests.get(
            url=f"https://pypi.org/pypi/{package}/json",
            headers={
                "accept": "*/*",
                "cache-control": "max-age=0",
                "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
            },
            timeout=10,
        )
        response.raise_for_status()
    except requests.RequestException as error:
        print(f"[Error]: {error}")
        return

    information: dict = json.loads(response.text)

    name: str = information["info"]["name"] or "null"
    version: str = information["info"]["version"] or "null"
    summary: str = information["info"]["summary"] or "null"
    release_url: str = information["info"]["release_url"] or "null"
    requires_python: str = information["info"]["requires_python"] or "null"

    filename: str = information["urls"][0]["filename"] or "null"
    url: str = information["urls"][0]["url"] or "null"

    blake2b_256: str = information["urls"][0]["digests"]["blake2b_256"] or "null"
    md5: str = information["urls"][0]["digests"]["md5"] or "null"
    sha256: str = information["urls"][0]["digests"]["sha256"] or "null"

    requires_dist: list = information["info"]["requires_dist"] or ["null"]
    releases: list = list(information["releases"].keys()) or ["null"]

    print(f"{'Name':<8}: {name}")
    print(f"{'Version':<8}: {version}")
    print(f"{'Summary':<8}: {summary}")
    print(f"{'PYPI':<8}: {release_url}")
    print(f"{'Python':<8}: {requires_python}")

    print(f"{'Package':<8}: {filename}")
    print(f"{'URL':<8}: {url}")

    print(f"{'Blake2b':<8}: {blake2b_256}")
    print(f"{'MD5':<8}: {md5}")
    print(f"{'SHA256':<8}: {sha256}")

    format_requires(requires_dist)
    format_releases(releases)

def main():
    if len(sys.argv) != 2:
        print("用法: pip_search <package_name>")
        sys.exit(1)
    search(sys.argv[1])

if __name__ == "__main__":
    main()
```

