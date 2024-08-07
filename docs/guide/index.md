# 👋 简介

一个PID实现的集合。

- 统一的调用接口，无需关注具体的 PID 实现
- 静态内存分配，无任何依赖，可用于单片机
- 易于扩展，支持同时运行多种 PID 控制器
- 包含分析、测试、模拟工具(TODO)
- 拥有[文档](https://xj63.github.io/PID-docs)和[示例](./examples)

## 🚀 功能

- [x] default （默认）
- [x] integral decay （积分衰减）
- [x] integral clamp （积分限幅）
- [x] integral separation （积分分离）
- [x] integral sliding window （积分滑动窗口，积分有限时间）

## 📖 Example

更多示例在 [examples](./examples)

```c
#include "pid/pid.h"
#include <stdbool.h>

void unknown_control(float thrust);
float unknown_sensor();

int main() {
  struct Pid pid = pid_new(1, 0, 0);
  float target = 0;
  while (true) {
    float actual = unknown_sensor();
    float thrust = pid_update(&pid, target, actual, 0.1);
    unknown_control(thrust);
  }
}
```

## 📦 添加到项目

推荐直接从 [GitHub Release](https://github.com/xj63/PID/releases) 下载 pid
(移除了`example` `test` `simulate` 文件夹) 并解压到项目目录下，
将 `pid` 下的代码文件添加到项目中就可以使用了。

也可以使用 `git clone` 到项目目录下。

```sh
$ git clone https://github.com/xj63/PID -o pid  # clone to local
```
