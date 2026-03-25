# 待安装软件清单

最后更新：2026-03-25

用于记录当前环境中缺少、但后续项目可能需要手动安装的软件。用户条件允许时统一安装。

## 当前待安装

1. ffmpeg
   - 用途：视频转码、提取音频、字幕相关处理
   - 原因：后续视频转写、字幕生成、基础视频处理需要
   - 安装命令（Ubuntu）：
     `sudo apt-get update && sudo apt-get install -y ffmpeg`

2. python3-pip
   - 用途：安装 Python 侧辅助工具
   - 原因：后续可能需要字幕、转写、脚本工具
   - 安装命令（Ubuntu）：
     `sudo apt-get update && sudo apt-get install -y python3-pip`

## 记录规则

- 以后凡是需要用户手动安装的软件，都加入这份清单。
- 默认写明：用途、原因、推荐安装命令。
- 用户需要统一安装时，直接从这里调取。
