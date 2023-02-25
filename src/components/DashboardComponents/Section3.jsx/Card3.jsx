import Tag from "../../UI/Tag";
import Card from "../Card";

const items = [
  {
    filter: "Recent",
    icon: <i class="lab la-paypal text-2xl"></i>,
    date: "20 Sep, 2022",
    tagColor: "softRed",
    title: "Salary Payment",
    tag: "- $62.45",
  },
  {
    filter: "Recent",
    icon: <i class="lab la-buffer text-2xl"></i>,
    date: "28 Mar, 2022",
    tagColor: "purple",
    title: "Online Product",
    tag: "+ $45.84",
  },
  {
    filter: "Yesterday",
    icon: <i class="las la-file-image text-2xl"></i>,
    date: "18 Sep, 2022",
    tagColor: "purple",
    title: "Maintenance",
    tag: "+ $25.52",
  },
  {
    filter: "Yesterday",
    icon: <i class="las la-bus text-2xl"></i>,
    date: "30 Nov, 2022",
    tagColor: "softRed",
    title: "Bus Booking",
    tag: "- $84.45",
  },
  {
    filter: "Yesterday",
    icon: <i class="lab la-telegram-plane text-2xl"></i>,
    date: "12 Feb, 2022",
    tagColor: "purple",
    title: "Flight Booking",
    tag: "+ $53.23",
  },
  {
    filter: "Yesterday",
    icon: <i class="las la-store-alt text-2xl"></i>,
    date: "12 Arl, 2022",
    tagColor: "purple",
    title: "Office Rent",
    tag: "+ 42.63",
  },
];

function Item(props) {
  return (
    <div className="flex pt-2.5 pb-2.5 items-center justify-between border-b">
      <div className="flex">
        <div className="bg-[#438a7a] text-white rounded-full avatar-sm h-10 w-10 flex items-center justify-center mr-4">
          {props.icon}
        </div>
        <div>
          <p className="text-base">{props.title}</p>
          <p className="text-sm text-muted">{props.date}</p>
        </div>
      </div>
      <Tag color={props.tagColor}>{props.tag}</Tag>
    </div>
  );
}

function Card3() {
  const recents = items.filter((item) => {
    return item.filter === "Recent";
  });
  const yesterday = items.filter((item) => {
    return item.filter === "Yesterday";
  });
  return (
    <Card className="col-xl-3">
      <div className="flex items-center overflow-auto">
        <h4 class="card-title mb-0 flex-grow-1 text-xl text-truncate text-[#495057] font-medium mb-2">
          Recent Transaction
        </h4>
        <i class="las la-ellipsis-h"></i>
      </div>
      <div>
        <p className="text-muted">Recent</p>
        {recents.map((item) => {
          return (
            <Item
              icon={item.icon}
              title={item.title}
              date={item.date}
              tag={item.tag}
              tagColor={item.tagColor}
            />
          );
        })}
        <p className="text-muted mt-3">Yesterday</p>
        {yesterday.map((item) => {
          return (
            <Item
              icon={item.icon}
              title={item.title}
              date={item.date}
              tag={item.tag}
              tagColor={item.tagColor}
            />
          );
        })}
      </div>
    </Card>
  );
}

export default Card3;
