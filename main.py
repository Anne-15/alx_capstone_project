import ssl
from flask import Flask, render_template, request
import os
from flask_mail import Mail

app = Flask(__name__)


gmail_user = os.getenv('gmail_user')
gmail_password = os.getenv('gmail_password')

# configuring values
app.config.update(
    MAIL_SERVER = "smtp.gmail.com",
    MAIL_PORT = '465',
    MAIL_USE_SSL= True,
    MAIL_USERNAME = gmail_user,
    MAIL_PASSWORD = gmail_password
)

# instance of mail
mail = Mail(app)

# App route
@app.route("/", methods=['GET','POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')

        print("Name:", name)
        print("Email:", email)
        print("Subject:", subject)
        print("Message:", message)

        recipient = ['portfolio624@gmail.com']

        mail.send_message("Message from " + name + " at " + email,
                        sender = email,
                        recipients = recipient,
                        body = subject + "\n\n" + message
                        )
    
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)