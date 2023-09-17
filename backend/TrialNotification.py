class TrialNotification:
    def __init__(self, title, payment, body):
        self.title = title
        self.payment = payment
        self.body = body
    
    def __str__(self):
        notify_title="NEW OPPORTUNTIY:\n"
        return f"\n{notify_title}\n\n{self.title}\n\n{self.payment}\n\n{self.body}"