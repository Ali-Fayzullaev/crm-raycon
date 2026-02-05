import {
  DollarSign,
  Clock,
  ShieldAlert,
  Eye,
  Users,
  Plane,
  UserMinus,
  Target,
  FileSpreadsheet,
} from "lucide-react";

const painPoints = [
  { icon: DollarSign, text: "Менеджеры сливают бюджет?" },
  { icon: Clock, text: "Клиенты не получают ответ вовремя?" },
  { icon: ShieldAlert, text: "Риск утечки базы клиентов?" },
  { icon: Eye, text: "Нет контроля за работой отдела продаж?" },
  { icon: Users, text: "Конкуренты продают лучше?" },
  { icon: Plane, text: "Не можете уйти в отпуск?" },
  { icon: UserMinus, text: "Клиенты уходят к конкурентам?" },
  { icon: Target, text: "Нет аналитики таргета?" },
  { icon: FileSpreadsheet, text: "Устали вести Excel?" },
];

export function Empathy() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            МЫ ПОНИМАЕМ, КАК ТЯЖЕЛО И НЕПРИЯТНО{" "}
            <span className="text-accent">ТЕРЯТЬ КЛИЕНТОВ</span> ИЗ-ЗА
            НЕКОМПЕТЕНТНОСТИ ОТДЕЛА ПРОДАЖ
          </h2>
          <p className="text-xl text-gray-600">
            Мы знаем, как иногда сложно и неприятно увидеть недополученную прибыль
            из-за человеческого фактора
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {painPoints.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200 hover:border-accent/50 transition-colors"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <Icon size={20} className="text-accent" />
              </div>
              <span className="text-gray-700 font-medium">{text}</span>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg text-gray-600 mb-4">
              Именно поэтому мы уже 20 лет помогаем таким клиентам, как вы, навести
              порядок в продажах и контролировать каждый этап работы с клиентами.
            </p>
            <p className="text-xl font-semibold text-gray-900">
              Присоединяйтесь к{" "}
              <span className="text-accent">10 000 компаний</span>, которые уже
              доверили нам свой бизнес.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
