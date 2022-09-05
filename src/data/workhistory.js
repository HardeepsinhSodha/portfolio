export const workHistoryData = [
    {
        id:1,
        company_name:'INT',
        designation:'Software Engineer',
        duration :'October 2021 - present',
        projects :[
            {
                id:1,
                title:'Xceed (CRM for DrReddy’s)',
                points:[
                    `Built graph using Google Charts library and JavaScript for visualization of tasks metrics`,
                    'Created many generic components',
                    "Built an app with React function component and Redux.",
                ],
                summary:`Developed Xceed, the DrReddy’s main CRM web app. Reduced API call frequency by 6 times for similar tasks by
                saving in center store and reduced loading time as well. Now the app is better in performance as well as easy to
                maintain. Resulted in 100% satisfaction by the client.`
            },
            {
                id:2,
                title:'Svaas (Support App)',
                points:[
                    `Developed Svaas's support web app v2.0 to add support for different health insurance companies' support
                    without affecting the current user interface.`,
                    "Developed solutions to initiatives that are in line with the intended design and standards",
                    `Write Test cases using Cypress and Testing library React(Jest)`,
                ],
                summary:`Implement all design requirments with test`
            },
            {
                id:3,
                title:' Alkem Marketplace',
                points:[
                    `Worked as the Lead Front-End Developer`,
                    `Defined project structure, select libraries, create tasks and assign them to other teammates, review their codes etc.`,
                ],
                summary:`Developed Alkem marketplace, an E-Commerce website of Alkem company, where their distributor and
                customers can buy their product, make payments, track their invoices, and much more.`,
                github_link:'',
                website_link:''
            }

        ]
    },
    {
        id:2    ,
        company_name:'Jyoti CNC Automation Ltd.',
        designation:'Process Engineer',
        duration :'August 2018 - September 2021',
        projects :[
            {
                id:1,
                title:'Production Management System',
                points:[
                    `Designed, developed, tested and deployed the whole project by myself.`,
                    `Conduct in-depth interviews, contextual field visits and usability studies with end users. Based on that, I
                    created the UI in Figma first and got approval`,
                    "Designed backend structure and API using Django and Rest frameworks."
                ],
                summary:`Replace previous method of tracking production which saves 40 hours of manpower per day directly and
                reduce inventory to 10% and many other improvements. Stockholders gain visibility into operational and asset
                performance with real-time dashboards that provide transparency across the factory floor. Identify production
                bottlenecks with downtime analytics to empower factory's production supervisors and planners to meet
                production goals.`
                
            },
            {
                id:2,
                title:'Process Engineering App',
                points:[
                    `Used Reactjs, Redux, React Hook Form and Mui to create Fontend.`,
                    'Used Python, SQL, MySQL, and Django for back-end code.',
                    "Learn SAP ERP systems' MM and PP module thoroughly for Database Design",
                ],
                summary:`Created a web app to link four departments’ work more efficiently and reduce the allover cycle time of
                Development equal to process time. The lead time was reduced from 80-90% of all over cycle time to almost
                0%. Reduced Excel work to 95%, and email conversion to 10% for all four departments. The company’s new
                parts' development cycle time is reduced by 75%.`
            },
            {
                id:3,
                title:'Automatic File Collection',
                points:[
                    `Used Python libraries Sys and Pandas, create software that can take the name of files given in the Excel
                    sheet and find them in a particular folder and paste a copy of those files in a particular folder`,
                    `Removed the human need to search files and pasted it to a folder`,
                ],
                summary:`Eliminate the repetitive task of creating individual excel files from row data of source excel file by running script.
                Replaced the current process of collecting files which were saved in a database in a particular structured way
                which takes one to two days of work. It reduces task time from 2 days to 20min and without any error.`
            }
        ]
    }
]