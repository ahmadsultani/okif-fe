interface DetailDateProps {
  date: string;
  views: number;
}

const DateViews = (props: DetailDateProps) => {
  const { views, date } = props;
  return (
    <span className="flex gap-2 text-text-s text-[#7C7C7C] font-normal">
      {date} • Telah dilihat {views} kali
    </span>
  );
};

export default DateViews;
