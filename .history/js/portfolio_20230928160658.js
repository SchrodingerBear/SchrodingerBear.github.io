for (p = 0; p <= portfolio.length - 1; p++) {
    $('#work').append('<div class="col l4 m12 s12">' +
        '<div class="col s12 card">' +
        '<div class="card-image">' +
        '<center>' +
        '<img src="' + portfolio[p][0] + '" alt="" class="responsive-img materialboxed" id="system_preview" style="padding-top:10px;">' +
        '</center>' +
        '</div>' +
        '<div class="card-content">' +
        '<p id="system_name">' + portfolio[p][1] + '</p>' +
        '<p id="system_info">' + portfolio[p][2] + '</p>' +
        '</div>' +
        '</div>' +
        '</div>');
}

let portfolio = [
    ['Image/systems/it_installer.jpg', 'IT SYSTEM INSTALLER', 'Web Application / July 2020'],
    ['Image/systems/PE.PNG', 'PE APP LAUNCHER', 'VB .Net Application / August 2020'],
    ['Image/systems/progresscounter.jpg', 'PRODUCTION PROGRESS COUNTER', 'Web Application / November 2020'],
    ['Image/systems/andonsystem.jpg', 'ANDON SYSTEM', 'Web Application / October 2020'],
    ['Image/systems/progress_counter_control_panel.jpg', 'PROGRESS COUNTER ADMIN', 'Web Application / November 2020'],
    ['Image/systems/prf_system.png', 'PRF APPROVAL SYSTEM', 'Web Application / February 2021'],
    ['Image/systems/furukawalima.png', 'FALP- OFFICAL WEBSITE', 'Web Hosting / February 2021'],
    ['Image/systems/server-ping.png', 'SERVER AND NETWORK PING TOOL', 'VB .Net Application / April 2021'],
    ['Image/systems/tubemaking_system.png', 'TUBEMAKING KANBAN SYSTEM', 'Web Application / July 2021'],
    ['Image/systems/pcs_summary_view.png', 'PROGRESS COUNTER SUMMARY', 'Web Application / August 2021'],
    ['Image/systems/hr-aris.png', 'HR Absenteeism Report Information System', 'Web Application / September 2021'],
    ['Image/systems/pcamera.png', 'pCAMERA - Image Classification Camera', 'Android App / November 2021'],
    ['Image/systems/faculty_scheduling_system.png', 'School Faculty Scheduling System', 'Web App(Debug) / December 2021'],
    ['Image/systems/homeseek_admin.png', 'HomeSeek Admin', 'Web App / February 2022'],
    ['Image/systems/library_management_sys_qr.jpeg', 'Library Management System w/ QR Code', 'Web App (Project Manager)/ June 2022'],
    ['Image/systems/sports_management.png', 'Sports Management System w/ Data Analytics', 'Web App (Project Manager)/ Sept 2022'],
    ['Image/systems/cafe-silangan-ms.png', 'Cafe Silangan Management System', 'Web App (Debug) / Oct 2022'],
    ['Image/systems/srmaps.png', 'Student Record Management System', 'Web App (Debug) / Oct 2022'],
    ['Image/systems/borrowed_item_invsys.png', 'Borrowed-Item Inventory System', 'Web App (Project Manager) / April 2023'],
];