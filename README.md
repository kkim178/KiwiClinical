## Inspiration
During our brainstorming phase, we decided to look at the various tracks. One track that piqued our interest was the B2B Group Optimally Implement Health Equity Into Clinical Trials because we were able to quickly come up with a lot of solutions. We thought there should be a simpler way for potential volunteers to sign up for clinical trials, and easier, more accessible ways for researchers to look for volunteers. 

Our goal is two parts. First, we want to increase awareness of actively-recruiting clinical trials to volunteers. Oftentimes, researchers may have a difficult time finding a diverse body of volunteers, simply because those prospective candidates may not even know about such opportunities. Second, we want to increase the likelihood that a citizen who knows about a clinical trial will choose to participate in it. Oftentimes people may feel un-inclined to participate a trial because they are not interested, feel that they are not relevant, or are worried about taken-on risks. Our platform includes features that help encourage those who are aware of certain trials feel safe, secure, and purposeful in participating in them.

## What it does
KiwiClinical is a platform that allows both clinicians and volunteers to easily find each other when looking to conduct/participate in clinical trials. The core feature's workflow sounds as such: A researcher will make a post declaring that they are looking for volunteers of certain physical attributes. Prospective patients will then see those posts, and can sign up for the trial through our platform. 

With a simple sign-up process, potential volunteers can easily sign up to be notified when clinical research trials will happen. All volunteers must do is type their email, phone number, age, race, weight, and height. 

Clinical researchers can create accounts for their organizations/universities, and create research trial posts. They can specify which demographics they want for the trial, across a wide range of physical attributes, including but not limited to: weight, height, age, and ethnicity. Once the trial is posted, all users with physical attributes that match the needs of the trial will be notified of the study by text message. They will be texted the title of the research, location, compensation, and description of the project (which would also include the date).

To address some of the challenges mentioned in our "Inspiration" section, there are a few more features that truly make KiwiClinical unique. 

1) Our platform will intelligently match patients to appropriate clinical trials. After seeing a patient's attributes, KiwiClinical will find the best available clinical trials that are recruiting patients with such attributes, and suggest them to the patient. This fulfills our goal of spreading awareness of relevant clinical trials to potential volunteers -- and also helps researchers remediate gaps in diversity by specifically looking for people to fill such gaps.

2) The "volunteer" side of our platform will provide information about other volunteers who signed up for clinical trials, to further incentivize patients to sign up. For example, an Asian male may be more incentivized to participate in a clinical trial studying heart disease treatments, if he sees that other people of his general demographic also signed up ("6 other people similar to you participated in this study:"). This fulfills our goal of encouraging patients to actually sign up for clinical trials once they are aware of them.

## How we built it
**(Backend)** The database was designed and created with Mongo DB Atlas. Flask (Python) was used to write the backend server. Insomnia API Platform was used to test the Flask routes. The Twilio API and Flask were used to write the code to send and receive texts.

**(Frontend)** The frontend was written in React.js, with Material UI used to speed up the construction of basic components (for example, sign-up & sign-in pages). The frontend consists of a large amount of logic, containing several pages and components, while also communicating to our Flask-based API.

## Challenges we ran into
**(Deployment)** One of the largest challenges we faced was finding a way to deploy our web app. At first, we tried to use Render and Google Cloud, but we were having difficulty setting up the accounts. We tried a few other options but ultimately settled on using Tunnel.dev as a more temporary means to host our backend. 

**(Frontend Development)** The frontend was challenging to make. Our frontend developers were familiar with React.js, but were not exceptionally proficient, so a lot of reviewing and re-learning was done. Despite our need to bring our skills up to speed, we believe we were able to develop a fairly extensive frontend, both in terms of functionality and aesthetics.

**(Going Full-Stack)** Another major challenge we faced was connecting our backend with our frontend. The backend (done with Python Flask and Mongo DB Atlas) and frontend (React.js with Material UI) were done separately for majority of the weekend, but we managed to connect them towards the end of the hackathon.

**(Twilio)** A smaller challenge we struggled with was being able to receive messages that users text to our Twilio phone number. We were able to find a solution after some efforts.

## Accomplishments that we're proud of
**(UI/UX)** We are very proud of the UI because it was very polished and easy on the eye. The color schemes worked well together to present a modern web application.

**(Going Full-Stack)** We are also proud of how we managed to connect the front and back end of our project. We spent a good chunk of our time independently developing each part of our project, so it was somewhat of a struggle for us for a while to connect all the components. The components were working individually but not quite together. However, we eventually managed to make it work, after a lot of research and persistence.

**(The Concept)** We are finally proud of our overall idea, and how we connected different technologies (Mongo DB, Flask, Twilio, React.js, etc.) to create a useful product.

## What we learned
On the surface level, we were better able to refine our skills in web development (whether that be front end, back end, or using APIs). However, overall, we learned to work as a team effectively. We each
worked mostly independently on the project. Eventually, we combined all our efforts into one complete product.

## What's next for Kiwi Clinical
There are a few more features we would like to add to our project:

**(Key feature)** We were working on a feature where users could see what kinds of other people participated in particular clinical trials. However, given the time constraint we were on, we were not able to totally see it to fruition. In future development, more time will be devoted to this feature, as we believe it is essential to what makes KiwiClinical effective.

**(Parameters)** We would like to eventually include more factors that researchers specify (e.g.,Blood type).

**(Longevity and Security)** We had to use a lot of tacky and temporary development practices just to get a minimum-viable-product on the table, given the time constraint of the hackathon. When developing this into a more professional and thorough service, we would like to add some user authentication to increase the security of our project.

## Notes For Testing Our Product
To test this on your own machine, please ensure Node.js is installed on your computer, and that the necessary packages are installed through the following commands:

```
$ cd frontend
$ npm install axios @mui/icons-material @mui/material @emotion/react @emotion/styled @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
```

Please reach out to shuan126@jh.edu for any inquiries!



https://devpost.com/software/569820/joins/jIFbmVs5ZlGXxqOeuF6beg