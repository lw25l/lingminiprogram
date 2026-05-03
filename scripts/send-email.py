#!/usr/bin/env python3
"""
邮件发送工具
使用 QQ 邮箱 SMTP 发送邮件
"""

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.header import Header
import sys

# QQ 邮箱 SMTP 配置
SMTP_SERVER = "smtp.qq.com"
SMTP_PORT = 587
SENDER_EMAIL = "1528265680@qq.com"
SENDER_AUTH_CODE = "euzaqxmrohjubada"

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
    if len(sys.argv) < 4:
        print("用法: python3 send-email.py <收件人> <主题> <内容>")
        print("      python3 send-email.py <收件人> <主题> --html <HTML内容>")
        sys.exit(1)
    
    to_email = sys.argv[1]
    subject = sys.argv[2]
    
    if sys.argv[3] == "--html" and len(sys.argv) >= 5:
        content = sys.argv[4]
        html = True
    else:
        content = sys.argv[3]
        html = False
    
    success = send_email(to_email, subject, content, html)
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()
