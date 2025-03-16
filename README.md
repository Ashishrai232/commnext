# commnext
#html 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CommNext Landing Page</title>
<link rel="stylesheet" href="hiicomstyle.css">
</head>
<body>
<header>
<div>CommNext</div>
<nav>
<a href="#home">HOME</a>
<a href="#features">FEATURES</a>
<a href="#use-cases">USE-CASES</a>
<a href="#contact">CONTACT</a>
<a href="#sign-up">SIGN UP</a>
<a href="#profile">PROFILE</a>
</nav>
</header>
 
<section class="hero">
<h1>STRUCTURED COMMUNICATION</h1>
<p>A centralized platform for discussions, issue tracking and collaboration.</p>
<button>Get Started</button>
<div>
<p>90+ Users</p>
<p>50+ Connections</p>
<p>5+ Services</p>
</div>
</section>
 
<section class="features" id="features">
<div class="feature-item">
<h2>WHAT MAKES US DIFFERENT?</h2>
<ul>
<li>Threaded Discussion</li>
<li>Issue Tracking</li>
<li>Role based access</li>
<li>No specific time limits</li>
</ul>
</div>
<!-- Replace with custom image -->
<img src="dummy-image.jpg" alt="Feature Image">
</section>
 
<section class="use-cases" id="use-cases">
<h2>Choose As per your USE</h2>
<div class="use-case-options">
<div class="use-case-option">
<h3>Community</h3>
<ul>
<li>Public Discussion Boards</li>
<li>Issue Reporting & Voting</li>
<li>Event & Announcement Section</li>
<li>User Groups & Interests</li>
<li>Anonymous Feedback</li>
</ul>
</div>
<div class="use-case-option">
<h3>Education</h3>
<ul>
<li>Assignment & Document Sharing</li>
<li>Live Q&A & Polis</li>
<li>Club & Organization Management</li>
<li>Lecture/Event Scheduling</li>
<li>Peer Mentorship</li>
</ul>
</div>
<div class="use-case-option">
<h3>Corporate</h3>
<ul>
<li>Team Communication & Collaboration</li>
<li>Task & Project Management</li>
<li>Company-Wide Announcements</li>
<li>Secure Document Sharing</li>
<li>Employee Feedback & Surveys</li>
</ul>
</div>
</div>
</section>
 
<section class="scaling">
<h2>Scaling Beyond Borders</h2>
<p>"HICOM: Connecting Everyone – From Workspaces to Communities, Schools to Neighborhoods"</p>
<!-- Replace with custom image -->
<img src="dummy-image.jpg" alt="Scaling Image">
</section>
 
<section class="cta">
<h2>READY TO Simplify?</h2>
<button>SIGN-UP Now</button>
</section>
 
<footer>
<p>CommNext is a seamless communication platform designed to connect communities, workplaces, and institutions with efficiency and security.</p>
<p>©2020 LaslesVPN</p>
</footer>
</body>
</html>
 

#########   CSS ##########


body {
font-family: Arial, sans-serif;
margin: 0;
padding: 0;
box-sizing: border-box;
color: #333; /* Default text color */
}
 
header {
display: flex;
justify-content: space-between;
padding: 20px;
background-color: #000; /* Black background */
color: #fff; /* White text */
}
 
header nav a {
margin: 0 15px;
text-decoration: none;
color: #fff; /* White text */
}
 
header nav a:hover {
color: #ff0000; /* Red hover effect */
}
 
.hero {
text-align: center;
padding: 50px 20px;
background-color: #fff; /* White background */
color: #000; /* Black text */
}
 
.hero h1 {
font-size: 2.5em;
color: #ff0000; /* Red heading */
}
 
.hero button {
padding: 15px 30px;
font-size: 1.2em;
background-color: #ff0000; /* Red button */
color: #fff; /* White text */
border: none;
border-radius: 5px;
cursor: pointer;
}
 
.hero button:hover {
background-color: #cc0000; /* Darker red on hover */
}
 
.features {
display: flex;
justify-content: space-around;
padding: 50px 20px;
background-color: #000; /* Black background */
color: #fff; /* White text */
}
 
.feature-item {
text-align: center;
}
 
.feature-item h2 {
color: #ff0000; /* Red heading */
}
 
.feature-item ul {
list-style-type: none;
padding: 0;
}
 
.feature-item ul li {
margin: 10px 0;
}
 
.use-cases {
padding: 50px 20px;
background-color: #fff; /* White background */
color: #000; /* Black text */
}
 
.use-cases h2 {
text-align: center;
color: #ff0000; /* Red heading */
}
 
.use-case-options {
display: flex;
justify-content: space-around;
margin-top: 30px;
}
 
.use-case-option {
background-color: #000; /* Black background */
padding: 20px;
border-radius: 10px;
width: 30%;
text-align: center;
color: #fff; /* White text */
}
 
.use-case-option h3 {
color: #ff0000; /* Red heading */
}
 
.use-case-option ul {
list-style-type: none;
padding: 0;
}
 
.use-case-option ul li {
margin: 10px 0;
}
 
.scaling {
text-align: center;
padding: 50px 20px;
background-color: #ff0000; /* Red background */
color: #fff; /* White text */
}
 
.scaling h2 {
font-size: 2em;
}
 
.cta {
text-align: center;
padding: 50px 20px;
background-color: #000; /* Black background */
color: #fff; /* White text */
}
 
.cta h2 {
color: #ff0000; /* Red heading */
}
 
.cta button {
padding: 15px 30px;
font-size: 1.2em;
background-color: #ff0000; /* Red button */
color: #fff; /* White text */
border: none;
border-radius: 5px;
cursor: pointer;
}
 
.cta button:hover {
background-color: #cc0000; /* Darker red on hover */
}
 
footer {
text-align: center;
padding: 20px;
background-color: #000; /* Black background */
color: #fff; /* White text */
}
 
footer p {
margin: 5px 0;
}
 

