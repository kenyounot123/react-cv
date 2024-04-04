export default function ViewSection({ section, info }) {
  return (
    <>
      {section === "Work" && (
        <>
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
