import Section1 from "../DashboardComponents/Section1/Section1";
import Section2 from "../DashboardComponents/Section2/Section2";
import Section3 from "../DashboardComponents/Section3.jsx/Section3";
import Section4 from "../DashboardComponents/Section4/Section4";


function Dashboard() {
  return (
    <section id="dashboard" className="absolute bottom-0 right-0">
      <div
        className="flex items-center justify-between mb-4"
      >
        <h1 className="uppercase font-bold text-lg text-[#495057]">Dashboard</h1>

        <p className="text-[#495057]">
          Dashboard <i class="las la-angle-right text-sm"></i>{" "}
          <span className="text-[#76797e]">Dashboard</span>
        </p>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </section>
  );
}

export default Dashboard;
