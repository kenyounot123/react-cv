/* eslint-disable react/prop-types */
export default function ViewSection({ section, info }) {
  return (
    <>
      {section === "General Info" && (
        <>
          <h1>
            {info.generalInfo.firstName + " " + info.generalInfo.lastName}
          </h1>
          <h3>{info.generalInfo.phoneNumber}</h3>
          <h3>{info.generalInfo.email}</h3>
        </>
      )}
      {section === "Work" && (
        <>
          <h1 className="view-section-title">Work Experience</h1>
          <li>Company Name: {info.workInfo.companyName}</li>
          <li>
            Start and end date:
            {info.workInfo.startDate + " " + info.workInfo.endDate}
          </li>
          <li>Responsibilities: {info.workInfo.responsibilities}</li>
        </>
      )}
      {section === "Education" && (
        <>
          <h1 className="view-section-title">Educational Experience</h1>
          <li>Study: {info.educationalInfo.study}</li>
          <li>School: {info.educationalInfo.school}</li>
          <li>
            Start and end date:
            {info.educationalInfo.startDate +
              " " +
              info.educationalInfo.endDate}
          </li>
        </>
      )}
    </>
  );
}
