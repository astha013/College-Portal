import React from 'react';
import InternshipCard from '../components/InternshipCard';

const internshipData = [
    [
        {
          "Sno.": 1,
          "title": "ELECTRICAL ENGINEER INTERN",
          "CompanyTitle": "PAVAN EMOPOWER SOLUTIONS",
          "Duration": "2 Months",
          "Stipend": "Unpaid",
          "Link ": "https://internship.aicte-india.org/internship-details.php?uid=SU5URVJOU0hJUF8xNzQ3OTA5Njk2NjgyZWZjNDA5ZWQxYQ=="
        },
        {
          "Sno.": 2,
          "title": "FULL STACK DEVELOPER (SOFTWARE ENGINEER)",
          "CompanyTitle": "LinkVerse Labs Private ltd",
          "Duration": "6 Weeks",
          "Stipend": "Unpaid",
          "Link ": "https://internship.aicte-india.org/internship-details.php?uid=SU5URVJOU0hJUF8xNzQ3NzM0MzU1NjgyYzRmNTNiMjY5NA=="
        },
        {
          "Sno.": 3,
          "title": "GEN AI & PROMPT ENGINEERING SUMMER INTERNSHIP 2025",
          "CompanyTitle": "Datavalley India Private limited",
          "Duration": "8 Weeks",
          "Stipend": "Unpaid",
          "Link ": "https://internship.aicte-india.org/internship-details.php?uid=SU5URVJOU0hJUF8xNzQ3NzIxMDQzNjgyYzFiNTNhZTY1MQ=="
        },
        {
          "Sno.": 4,
          "title": "FULL STACK DEVELOPER (SOFTWARE ENGINEER)",
          "CompanyTitle": "TECH ED SOLUTION",
          "Duration": "2 Months",
          "Stipend": "Unpaid",
          "Link ": "https://internship.aicte-india.org/internship-details.php?uid=SU5URVJOU0hJUF8xNzQ3NTcwOTQyNjgyOWQwZmU0MjFhOA=="
        },
        {
          "Sno.": 5,
          "title": "WEB DEVELOPER OR MOBILE APP DEVELOPER OR SOFTWARE ENGINEER",
          "CompanyTitle": "INVIGO INFOTECH",
          "Duration": "8 Weeks",
          "Stipend": "Unpaid",
          "Link ": "https://internship.aicte-india.org/internship-details.php?uid=SU5URVJOU0hJUF8xNzQ3NDAwMzA0NjgyNzM2NzA3NmQ4MA=="
        },
        {
          "Sno.": 6,
          "title": "FULL STACK DEVELOPER (SOFTWARE ENGINEER)",
          "CompanyTitle": "BLEEP EDUCATION",
          "Duration": "2 Months",
          "Stipend": "Unpaid",
          "Link ": "https://internship.aicte-india.org/internship-details.php?uid=SU5URVJOU0hJUF8xNzQ3MDQ5MDkzNjgyMWRhODU5NDkxNA=="
        },
        {
          "Sno.": 7,
          "title": "WEB DEVELOPER OR MOBILE APP DEVELOPER OR SOFTWARE ENGINEER",
          "CompanyTitle": "Edmedtech Healthcare Solutions LLP",
          "Duration": "2 Months",
          "Stipend": "Unpaid",
          "Link ": "https://internship.aicte-india.org/internship-details.php?uid=SU5URVJOU0hJUF8xNzQ2OTg0MTMyNjgyMGRjYzRhMDg2Mg=="
        },
        {
          "Sno.": 8,
          "title": "AWS DEVOPS ENGINEERING INTERN",
          "CompanyTitle": "BluePlanet Infosolutions India Pvt Ltd",
          "Duration": "6 Months",
          "Stipend": "Unpaid",
          "Link ": "https://internship.aicte-india.org/internship-details.php?uid=SU5URVJOU0hJUF8xNzQ2ODYwODE0NjgxZWZiMGU0NWIyNQ=="
        },
        {
          "Sno.": 9,
          "title": "PROMT ENGINEERING",
          "CompanyTitle": "DR PALLAM SETTI INNOVATIONS",
          "Duration": "6 Weeks",
          "Stipend": "Unpaid",
          "Link ": "https://internship.aicte-india.org/internship-details.php?uid=SU5URVJOU0hJUF8xNzQzODU5Mjc0NjdmMTJlNGE1OTJkMw=="
        },
        {
          "Sno.": 10,
          "title": "CLOUD ENGINEER",
          "CompanyTitle": "Talent Trek E-Learning pvt ltd",
          "Duration": "3 Months",
          "Stipend": "15000/Month",
          "Link ": "https://internship.aicte-india.org/internship-details.php?uid=SU5URVJOU0hJUF8xNzQyMzA0NTQ1NjdkOTc1MjFiM2UwYw=="
        },
        {
          "Sno.": 11,
          "title": "FULL STACK DEVELOPER (SOFTWARE ENGINEER)",
          "CompanyTitle": "ALGO YUKTI",
          "Duration": "3 Months",
          "Stipend": "Unpaid",
          "Link ": "https://internship.aicte-india.org/internship-details.php?uid=SU5URVJOU0hJUF8xNzQyMTkyOTUxNjdkN2MxMzdhMDdkOQ=="
        }
      ]
      
];

const InternshipSection = () => {
  return (
    <section className="bg-gray-100">
      <h1 className="text-2xl font-bold text-center py-4">Available Internships</h1>
      <InternshipCard data={internshipData} />
    </section>
  );
};

export default InternshipSection;
