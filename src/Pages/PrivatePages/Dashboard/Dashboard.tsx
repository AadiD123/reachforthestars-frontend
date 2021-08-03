import React from 'react';
import styles from './Dashboard.module.css';
import profile from './../../../profile.svg'

function clickDashboard(){
    var dashboard = document.getElementById("dashboard");
    var logtutoringsession = document.getElementById("logtutoringsession");
    var faqs = document.getElementById("faqs");
    var settings = document.getElementById("settings");
    var dashboardsection = document.getElementById("dashboardsection");
    var logtutoringsessionssection = document.getElementById("logtutoringsessionssection");
    var faqssection = document.getElementById("faqssection");
    var settingssection = document.getElementById("settingssection");
    if(dashboard != null && logtutoringsession != null && faqs != null && settings != null && dashboardsection != null && logtutoringsessionssection != null && faqssection != null && settingssection != null ){
        dashboard.style.backgroundColor = "#001E3D";
        dashboard.style.color = "white";
        logtutoringsession.style.backgroundColor = "#F0F0F0";
        logtutoringsession.style.color = "black";
        faqs.style.backgroundColor = "#F0F0F0";
        faqs.style.color = "black";
        settings.style.backgroundColor = "#F0F0F0";
        settings.style.color = "black";
        dashboardsection.style.display = "block";
        logtutoringsessionssection.style.display = "none";
        faqssection.style.display = "none";
        settingssection.style.display = "none";
    }
}

function clickLogTutoringSession(){
    var dashboard = document.getElementById("dashboard");
    var logtutoringsession = document.getElementById("logtutoringsession");
    var faqs = document.getElementById("faqs");
    var settings = document.getElementById("settings");
    var dashboardsection = document.getElementById("dashboardsection");
    var logtutoringsessionssection = document.getElementById("logtutoringsessionssection");
    var faqssection = document.getElementById("faqssection");
    var settingssection = document.getElementById("settingssection");
    if(dashboard != null && logtutoringsession != null && faqs != null && settings != null && dashboardsection != null && logtutoringsessionssection != null && faqssection != null && settingssection != null ){
        dashboard.style.backgroundColor = "#F0F0F0";
        dashboard.style.color = "black";
        logtutoringsession.style.backgroundColor = "#001E3D";
        logtutoringsession.style.color = "white";
        faqs.style.backgroundColor = "#F0F0F0";
        faqs.style.color = "black";
        settings.style.backgroundColor = "#F0F0F0";
        settings.style.color = "black";
        dashboardsection.style.display = "none";
        logtutoringsessionssection.style.display = "block";
        faqssection.style.display = "none";
        settingssection.style.display = "none";
    }
}

function clickFaqs(){
    var dashboard = document.getElementById("dashboard");
    var logtutoringsession = document.getElementById("logtutoringsession");
    var faqs = document.getElementById("faqs");
    var settings = document.getElementById("settings");
    var dashboardsection = document.getElementById("dashboardsection");
    var logtutoringsessionssection = document.getElementById("logtutoringsessionssection");
    var faqssection = document.getElementById("faqssection");
    var settingssection = document.getElementById("settingssection");
    if(dashboard != null && logtutoringsession != null && faqs != null && settings != null && dashboardsection != null && logtutoringsessionssection != null && faqssection != null && settingssection != null ){
        dashboard.style.backgroundColor = "#F0F0F0";
        dashboard.style.color = "black";
        logtutoringsession.style.backgroundColor = "#F0F0F0";
        logtutoringsession.style.color = "black";
        faqs.style.backgroundColor = "#001E3D";
        faqs.style.color = "white";
        settings.style.backgroundColor = "#F0F0F0";
        settings.style.color = "black";
        dashboardsection.style.display = "none";
        logtutoringsessionssection.style.display = "none";
        faqssection.style.display = "block";
        settingssection.style.display = "none";
    }
}

function clickSettings(){
    var dashboard = document.getElementById("dashboard");
    var logtutoringsession = document.getElementById("logtutoringsession");
    var faqs = document.getElementById("faqs");
    var settings = document.getElementById("settings");
    var dashboardsection = document.getElementById("dashboardsection");
    var logtutoringsessionssection = document.getElementById("logtutoringsessionssection");
    var faqssection = document.getElementById("faqssection");
    var settingssection = document.getElementById("settingssection");
    if(dashboard != null && logtutoringsession != null && faqs != null && settings != null && dashboardsection != null && logtutoringsessionssection != null && faqssection != null && settingssection != null ){
        dashboard.style.backgroundColor = "#F0F0F0";
        dashboard.style.color = "black";
        logtutoringsession.style.backgroundColor = "#F0F0F0";
        logtutoringsession.style.color = "black";
        faqs.style.backgroundColor = "#F0F0F0";
        faqs.style.color = "black";
        settings.style.backgroundColor = "#001E3D";
        settings.style.color = "white";
        dashboardsection.style.display = "none";
        logtutoringsessionssection.style.display = "none";
        faqssection.style.display = "none";
        settingssection.style.display = "block";
    }
}

function Dashboard(){
    return(
        <div className={styles.grid} >
           <div className = {styles.toggle}>
               <div className = {styles.options}>
                    <img src = {profile} alt = "profile"/>
                    <h1 style = {{backgroundColor: "#001E3D", color: "white"}} onClick = {clickDashboard} id = "dashboard">Dashboard</h1>
                    <h1 onClick = {clickLogTutoringSession} id = "logtutoringsession">Log Tutoring Session</h1>
                    <h1 onClick = {clickFaqs} id = "faqs">Tutoring FAQ</h1>
                    <h1 onClick = {clickSettings} id = "settings">Account Settings</h1>
               </div>
           </div>
           <div className = {styles.content}>
                <div style = {{display: "block"}} id = "dashboardsection" className={styles.dashboard}>
                    <h1 className={styles.title}>General Volunteers</h1>
                    <p className={styles.paragraph}>Welcome to the General Volunteer tab! Here you can find all the things you can work on and all materials you will need as a general volunteer!</p>
                    <h1 className={styles.title}>Log Service Hours</h1>
                    <textarea className={styles.box}></textarea>
                    <h1 className={styles.title}>Help Us Get More Students</h1>
                    <p className={styles.paragraph}>Reach out to ALL the parents you know to help us get more students! Find local schools and put their emails on this spreadsheet for us to contact. </p>
                    <button className={styles.button}>Outreach Spreadsheet</button>
                </div>
                <div style = {{display: "none"}} id = "logtutoringsessionssection" className={styles.dashboard}>
                    <h1 className={styles.title}>Get Started</h1>
                    <p className={styles.paragraph}>Click these if you are new or have any additional questions.</p>
                    <div className={styles.buttons}>
                    <button className={styles.button} >Outreach Spreadsheet</button>
                    <button className={styles.button} style={{marginLeft:"10px"}}>Outreach Spreadsheet</button>
                    </div>
                    <textarea className={styles.box}></textarea>
                    <h1 className={styles.title}>Help Us Get More Students</h1>
                    <p className={styles.paragraph}>Reach out to ALL the parents you know to help us get more students! Find local schools and put their emails on this spreadsheet for us to contact. </p>
                    <button className={styles.button}>Outreach Spreadsheet</button>
                </div>
                <div style = {{display: "none"}} id = "faqssection" className={styles.dashboard}>
                    <h1 className={styles.title}>FAQs</h1>
                    <p className={styles.paragraph}>Welcome to the General Volunteer tab! Here you can find all the things you can work on and all materials you will need as a general volunteer!</p>
                    <h1 className={styles.title}>Log Service Hours</h1>
                    <textarea className={styles.box}></textarea>
                    <h1 className={styles.title}>Help Us Get More Students</h1>
                    <p className={styles.paragraph}>Reach out to ALL the parents you know to help us get more students! Find local schools and put their emails on this spreadsheet for us to contact. </p>
                    <button className={styles.button}>Outreach Spreadsheet</button>
                </div>
                <div style = {{display: "none"}} id = "settingssection" className={styles.dashboard}>
                    <h1 className={styles.title}>Account Settings</h1>
                    <p className={styles.paragraph}>Welcome to the General Volunteer tab! Here you can find all the things you can work on and all materials you will need as a general volunteer!</p>
                    <h1 className={styles.title}>Log Service Hours</h1>
                    <textarea className={styles.box}></textarea>
                    <h1 className={styles.title}>Help Us Get More Students</h1>
                    <p className={styles.paragraph}>Reach out to ALL the parents you know to help us get more students! Find local schools and put their emails on this spreadsheet for us to contact. </p>
                    <button className={styles.button}>Outreach Spreadsheet</button>
                </div>


        
           </div>
        </div>

    );
};

export default Dashboard;