import { Calendar } from "@/components/ui/calendar";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

/*
    커스텀 ui로, 기존 ui를 호출하고 관련설정을 추가로 넣어준다.
*/
export function LocaleCalendar(props: any) {
  // JSX에서 태그 형태로 컴포넌트 사용 시 속성들은 내부적으로 객체 형태 변환됨.
  return (
    <Calendar
      {...props}
      locale={ko}
      components={{
        CaptionLabel: ({ displayMonth }) => (
          <div className="text-sm">
            {format(displayMonth, "yyyy년 MM월", { locale: ko })}
          </div>
        ),
        IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRightIcon className="h-4 w-4" />,
      }}
    />
  );
}
