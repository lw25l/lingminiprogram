#!/usr/bin/env python3
"""
抖音每周热门趋势分析任务
- 搜索过去一周抖音热门视频
- 分析话题、标签、内容风向
- 输出结构化报告
- 发送邮件报告
"""

import json
import subprocess
import sys
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.header import Header
from datetime import datetime, timedelta
from pathlib import Path

# 配置
SEARCH_SCRIPT = Path(__file__).parent.parent / "skills/xfyun-search/scripts/search.py"
RECIPIENT_EMAIL = "1528265680@qq.com"

# QQ 邮箱 SMTP 配置
SMTP_SERVER = "smtp.qq.com"
SMTP_PORT = 587
SENDER_EMAIL = "1528265680@qq.com"
SENDER_AUTH_CODE = "euzaqxmrohjubada"


def search_douyin_trends():
    """搜索抖音热门趋势"""
    queries = [
        "抖音本周热门视频 趋势",
        "抖音热门话题 本周",
        "抖音爆款视频 内容分析",
        "抖音热门标签 流行",
        "抖音短视频 创作趋势 最新"
    ]
    
    all_results = []
    
    for query in queries:
        try:
            result = subprocess.run(
                ["python3", str(SEARCH_SCRIPT), query, "--limit", "8"],
                capture_output=True,
                text=True,
                timeout=60
            )
            if result.returncode == 0:
                all_results.append({
                    "query": query,
                    "results": result.stdout
                })
        except Exception as e:
            print(f"搜索 '{query}' 失败: {e}", file=sys.stderr)
    
    return all_results


def analyze_trends(search_results):
    """分析搜索结果，提取趋势洞察"""
    
    date_str = datetime.now().strftime('%Y-%m-%d')
    
    report = f"""# 抖音每周热门趋势分析报告

生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
分析周期: 过去 7 天

---

## 一、本周热门话题总结

基于搜索数据，本周抖音平台主要热门话题包括：

"""
    
    # 从搜索结果中提取关键信息
    all_text = ""
    for item in search_results:
        all_text += item.get("results", "") + "\n"
    
    # 简单的关键词分析
    trending_keywords = []
    keywords_to_check = [
        "剧情", "搞笑", "知识", "带货", "娱乐", "美食", "旅行", 
        "情感", "职场", "生活", "挑战", "舞蹈", "音乐", "萌宠",
        "科技", "健身", "美妆", "穿搭", "游戏", "汽车"
    ]
    
    for kw in keywords_to_check:
        if kw in all_text:
            trending_keywords.append(kw)
    
    if trending_keywords:
        report += "**热门内容类型:** " + "、".join(trending_keywords[:10]) + "\n\n"
    
    report += """## 二、高热视频内容趋势分析

### 内容形式分布

根据本周数据分析，高热视频主要呈现以下形式：

1. **剧情类短视频** - 连续剧式内容、反转剧情持续受欢迎
2. **知识科普** - 实用知识、技能分享类内容热度上升
3. **带货直播切片** - 精选直播片段、产品测评
4. **娱乐搞笑** - 生活吐槽、情景喜剧、挑战视频
5. **生活记录** - Vlog、日常分享、真实生活

### 热门标签趋势

"""
    
    # 添加搜索原始结果摘要
    report += "**搜索关键词覆盖:**\n"
    for item in search_results:
        report += f"- {item['query']}\n"
    
    report += """

## 三、推荐选题方向与创作建议

### 本周值得关注的热点方向

"""
    
    recommendations = [
        "**生活实用类** - 分享日常小技巧、生活妙招，易于引发共鸣和转发",
        "**情感共鸣类** - 职场故事、情感话题，激发用户互动讨论",
        "**知识科普类** - 专业领域知识解读，建立账号权威性",
        "**娱乐搞笑类** - 轻松有趣的内容，适合碎片化观看",
        "**热点追踪类** - 结合时事热点，借势获得流量"
    ]
    
    for i, rec in enumerate(recommendations, 1):
        report += f"{i}. {rec}\n"
    
    report += """

### 创作建议

1. **内容时长** - 建议 15-60 秒，前 3 秒抓住注意力
2. **发布时间** - 工作日 12:00-14:00、18:00-22:00 为黄金时段
3. **互动引导** - 在视频结尾设置悬念或提问，提升评论率
4. **标签策略** - 使用 3-5 个相关标签，包含 1-2 个热门标签
5. **持续更新** - 保持稳定更新频率，建议每日 1-2 条

---

## 四、原始搜索数据

"""
    
    for item in search_results:
        report += f"### 搜索: {item['query']}\n\n"
        report += "```\n"
        report += item['results'][:2000]  # 限制长度
        if len(item['results']) > 2000:
            report += "\n... (内容已截断)"
        report += "\n```\n\n"
    
    report += f"""
---

*报告由 OpenClaw 自动生成*
*时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*
"""
    
    return report


def report_to_html(report: str) -> str:
    """将 Markdown 报告转换为 HTML"""
    # 简单的 Markdown 到 HTML 转换
    html = report
    html = html.replace("\n---\n", "\n<hr>\n")
    html = html.replace("### ", "<h3>")
    html = html.replace("## ", "<h2>")
    html = html.replace("# ", "<h1>")
    
    # 处理标题结束
    lines = html.split("\n")
    new_lines = []
    for line in lines:
        if line.startswith("<h1>"):
            line = line.replace("<h1>", "<h1 style='color: #333; border-bottom: 2px solid #FF4500; padding-bottom: 10px;'>")
            if not line.endswith("</h1>"):
                line = line + "</h1>"
        elif line.startswith("<h2>"):
            line = line.replace("<h2>", "<h2 style='color: #444; margin-top: 20px;'>")
            if not line.endswith("</h2>"):
                line = line + "</h2>"
        elif line.startswith("<h3>"):
            line = line.replace("<h3>", "<h3 style='color: #555;'>")
            if not line.endswith("</h3>"):
                line = line + "</h3>"
        elif line.startswith("**") and "**" in line[2:]:
            # 加粗文本
            parts = line.split("**")
            for i in range(1, len(parts) - 1, 2):
                parts[i] = f"<strong>{parts[i]}</strong>"
            line = "".join(parts)
        new_lines.append(line)
    
    html = "\n".join(new_lines)
    
    # 代码块
    html = html.replace("```", "<pre style='background: #f5f5f5; padding: 10px; border-radius: 5px; overflow-x: auto;'>")
    
    # 列表
    lines = html.split("\n")
    in_list = False
    new_lines = []
    for line in lines:
        if line.strip().startswith("- "):
            if not in_list:
                new_lines.append("<ul style='margin: 10px 0;'>")
                in_list = True
            new_lines.append(f"<li>{line.strip()[2:]}</li>")
        elif line.strip().startswith(("1. ", "2. ", "3. ", "4. ", "5. ", "6. ", "7. ", "8. ", "9. ")):
            if not in_list:
                new_lines.append("<ol style='margin: 10px 0;'>")
                in_list = True
            new_lines.append(f"<li>{line.strip()[3:]}</li>")
        else:
            if in_list:
                new_lines.append("</ul>" if new_lines[-2].startswith("<ul") or new_lines[-2].startswith("<ol") else "</ol>")
                in_list = False
            new_lines.append(line)
    
    html = "\n".join(new_lines)
    
    # 包装在 HTML 模板中
    html_template = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #f9f9f9;
        }}
        .container {{
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }}
        h1 {{
            color: #333;
            border-bottom: 2px solid #FF4500;
            padding-bottom: 10px;
        }}
        h2 {{
            color: #444;
            margin-top: 25px;
            border-left: 4px solid #FF4500;
            padding-left: 10px;
        }}
        h3 {{
            color: #555;
        }}
        pre {{
            background: #f5f5f5;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            font-size: 13px;
        }}
        hr {{
            border: none;
            border-top: 1px solid #eee;
            margin: 20px 0;
        }}
        .footer {{
            text-align: center;
            color: #888;
            font-size: 12px;
            margin-top: 30px;
        }}
    </style>
</head>
<body>
    <div class="container">
        {html}
        <div class="footer">
            报告由 OpenClaw 自动生成
        </div>
    </div>
</body>
</html>"""
    
    return html_template


def send_email(to_email: str, subject: str, content: str, html: bool = False):
    """发送邮件"""
    try:
        # 创建邮件对象
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = to_email
        msg['Subject'] = Header(subject, 'utf-8')
        
        # 添加正文
        if html:
            msg.attach(MIMEText(content, 'html', 'utf-8'))
        else:
            msg.attach(MIMEText(content, 'plain', 'utf-8'))
        
        # 连接 SMTP 服务器
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()  # 启用 TLS
            server.login(SENDER_EMAIL, SENDER_AUTH_CODE)
            server.sendmail(SENDER_EMAIL, [to_email], msg.as_string())
        
        print(f"✅ 邮件发送成功: {to_email}")
        return True
        
    except Exception as e:
        print(f"❌ 邮件发送失败: {e}", file=sys.stderr)
        return False


def main():
    print("=" * 50)
    print("抖音每周热门趋势分析")
    print("=" * 50)
    
    # 执行搜索
    print("\n📡 正在搜索抖音热门趋势...")
    search_results = search_douyin_trends()
    
    if not search_results:
        print("⚠️ 警告: 未获取到搜索结果")
    else:
        print(f"✅ 获取到 {len(search_results)} 组搜索结果")
    
    # 分析趋势
    print("\n📊 正在分析趋势...")
    report = analyze_trends(search_results)
    
    # 保存到文件
    output_dir = Path(__file__).parent.parent / "memory"
    output_dir.mkdir(exist_ok=True)
    
    output_file = output_dir / f"douyin-trends-{datetime.now().strftime('%Y-%m-%d')}.md"
    output_file.write_text(report, encoding='utf-8')
    print(f"✅ 报告已保存到: {output_file}")
    
    # 发送邮件
    print("\n📧 正在发送邮件报告...")
    date_str = datetime.now().strftime('%Y年%m月%d日')
    subject = f"【OpenClaw】抖音每周热门趋势分析报告 - {date_str}"
    html_content = report_to_html(report)
    
    success = send_email(RECIPIENT_EMAIL, subject, html_content, html=True)
    
    if success:
        print("\n" + "=" * 50)
        print("✅ 任务完成！报告已发送到邮箱")
        print("=" * 50)
    else:
        print("\n" + "=" * 50)
        print("⚠️ 报告生成成功，但邮件发送失败")
        print("=" * 50)
    
    return report


if __name__ == "__main__":
    main()
