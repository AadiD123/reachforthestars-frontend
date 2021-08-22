import DashboardItem from "./DashboardItem";

const TestDashboardNav = () => {
  const data: any = [];
  return (
    <div>
      <h2>Dashboard</h2>
      {data.map((navItem: any, index: any) => {
        return <DashboardItem key={index} />;
      })}
    </div>
  );
};

export default TestDashboardNav;
