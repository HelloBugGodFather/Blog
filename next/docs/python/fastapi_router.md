---
title: FastAPI文件即路由
tags:
    - FastAPI
    - 自动导入
---

# FastAPI文件即路由

## 工具代码

```python
def auto_import(app: FastAPI, api_path:Path):
    for file in api_path.glob('*.py'):
        if file.name == '__init__.py':
            continue

        prefix='/api/'+file.relative_to(api_path).with_suffix('').as_posix()
        module_name=prefix.replace('/','_')[1:]
        spec=importlib.util.spec_from_file_location(module_name,file)
        if not (spec and spec.loader):
            continue
        module=importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)

        if hasattr(module,'router') and isinstance(module.router,APIRouter):
            app.include_router(module.router,prefix=prefix)
```
