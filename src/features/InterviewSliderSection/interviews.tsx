export interface InterviewItem {
  id: string;
  src: string;
  title: string;
  category: string;
  date: string;
  href: string;
}

export const interviews: InterviewItem[] = [
  {
    id: "1",
    src: "/img/interview1.png",
    title:
      "Комбриг 80-ї одшбр Павло Розлач “Ведмідь”: Крута рота нашого 2-го батальйону за два дні до початку наступу на Курщину приховано перейшла кордон і сиділа в засідці",
    category: "Суспільні новини",
    date: "15 жовтня 2024, 10:54",
    href: "/interviews/1",
  },
  {
    id: "2",
    src: "/img/interview2.png",
    title:
      "Начштабу КДШВ Дмитро Братішко: Під час відсічі рф ми використали технічні напрацювання з маневрів “Три мечі” ЛитПолУкрБриг, яку я очолював",
    category: "Новини",
    date: "15 жовтня 2024, 10:54",
    href: "/interviews/2",
  },
  {
    id: "3",
    src: "/img/interview3.png",
    title:
      "Начштабу КДШВ Дмитро Братішко: Під час відсічі рф ми використали технічні напрацювання з маневрів “Три мечі”",
    category: "Суспільні новини",
    date: "15 жовтня 2024, 10:54",
    href: "/interviews/3",
  },
  {
    id: "4",
    src: "/img/interview3.png",
    title:
      "Комбриг 80-ї одшбр Павло Розлач “Ведмідь”: Крута рота нашого 2-го батальйону за два дні до початку наступу",
    category: "Суспільні новини",
    date: "15 жовтня 2024, 10:54",
    href: "/interviews/4",
  },
];