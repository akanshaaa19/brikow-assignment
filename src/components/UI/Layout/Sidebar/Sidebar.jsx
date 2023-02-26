import SidebarComponent from "./SidebarComponent";

import logoDark from "../../../../images/logoDark.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const sidebarComponents = [
  {
    label: "Pages",
    id: "pages",
    components: [
      {
        id: 2,
        icon: <i class="las la-file-invoice"></i>,
        name: "Invoices Management",
        dropdown: [
          "Invoice",
          "Add Invoice",
          "Invoice Details",
          "Payments",
          "Taxes",
          "Products",
          "Report",
          "Users",
          "Transaction",
        ],
        showDropdown: false,
        link: false,
      },
      {
        id: 3,
        icon: <i class="las la-cog"></i>,
        name: "Authentication",
        dropdown: ["Sign In", "Sign Up", "Password Reset", "Lock Screen"],
        showDropdown: false,
      },
    ],
  },
  {
    label: "Componenents",
    id: "comp",
    components: [
      {
        id: 4,
        dropdown: [
          "Alerts",
          "Badges",
          "Buttons",
          "Colors",
          "Cards",
          "Carousel",
          "Dropdowns",
          "Grid",
          "Images",
          "Tabs",
          "Accordion & Collapse",
          "Modals",
          "Offcanvas",
          "Placeholders",
          "Progress",
          "Notifications",
          "Media object",
          "Embed Video",
          "Typography",
          "Lists",
          "General",
          "Utilities",
        ],
        showDropdown: false,
        icon: <i class="las la-pen-nib"></i>,
        name: "Bootstrap UI",
      },
      {
        id: 5,
        dropdown: [
          "Sweet Alerts",
          "Nestable List",
          "Scrollbar",
          "Swiper Slider",
          "Ratings",
          "Highlight",
          "ScrollSpy",
        ],
        showDropdown: false,
        icon: <i class="las la-share-alt"></i>,
        name: "Advance UI",
      },
      {
        id: 6,
        dropdown: [
          "Basic Elements",
          "Form Select",
          "Checkboxs & Radios",
          "Pickers",
          "Input Masks",
          "Advanced",
          "Range Slider",
          "Validation",
          "Wizard",
          "Editors",
          "File Uploads",
          "Form Layouts",
          "Tom Select",
        ],
        icon: <i class="lab la-wpforms"></i>,
        name: "Forms",
        showDropdown: false,
      },
      {
        id: 7,
        dropdown: ["Basic Tables", "Grid Js", "List Js", "Datatables"],
        icon: <i class="las la-table"></i>,
        name: "Tables",
        showDropdown: false,
      },
      {
        id: 8,
        dropdown: [
          "Line",
          "Area",
          "Column",
          "Bar",
          "Mixed",
          "Timeline",
          "Candlstick",
          "Boxplot",
          "Bubble",
          "Scatter",
          "Heatmap",
          "Treemap",
          "Pie",
          "Radialbar",
          "Radar",
          "Polar Area",
        ],
        icon: <i class="las la-chart-pie"></i>,
        name: "Apexcharts",
        showDropdown: false,
      },
      {
        id: 9,
        dropdown: [
          "Remix",
          "Boxicons",
          "Material Design",
          "Bootstrap",
          "Line Awesome",
        ],
        icon: <i class="las la-gift"></i>,
        name: "Icons",
        showDropdown: false,
      },
      {
        id: 10,
        dropdown: ["Google", "Vector", "Leaflet"],
        icon: <i class="las la-map-marked"></i>,
        name: "Maps",
        showDropdown: false,
      },
      {
        id: 11,
        dropdown: ["Level 1.1", "Level 1.2"],
        icon: <i class="las la-share-square"></i>,
        name: "Multi Level",
        showDropdown: false,
      },
    ],
  },
];

function handleDropdown(props) {
  const component = sidebarComponents.filter((item) => {
    return props.Cid === item.id;
  });
  const components = component[0].components;
  const element = components.filter((item) => {
    return item.id === props.id;
  });
  console.log(element[0]);

  // console.log(element[0].components.showDropdown)
}

function Sidebar() {
  return (
    <section className="sidebar h-screen overflow-auto fixed left-0 bg-white z-5 flex flex-col">
      <Link className="py-7" to="/">
        <img src={logoDark} className="w-fit mx-auto" />
      </Link>
      <SidebarComponent
        className="active"
        component={{
          label: "Menu",
          components: [
            {
              icon: <i class="las la-house-damage"></i>,
              name: "Dashboard",
              dropdown: [],
              link: true,
            },
          ],
        }}
      />
      {sidebarComponents.map((item) => {
        return (
          //  <NavLink to={"/" + item.components.name}>
          <SidebarComponent setDropdown={handleDropdown} component={item} />
          //  </NavLink>
        );
      })}
    </section>
  );
}

export default Sidebar;
