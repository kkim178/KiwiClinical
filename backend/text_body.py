class TrialNotification:
        def __init__(self, title, address, payment, body):
            self.title = title
            self.address = address
            self.body = body
            self.payment = payment
        
        def __str__(self):
            notify_title = "NEW OPPORTUNITY:"
            return f"\n${notify_title}\n\n{self.title}\n\nAddress: {self.address}\n\nPayment: {self.payment}\n\n{self.body}"


