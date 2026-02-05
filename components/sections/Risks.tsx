import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  UserX,
  Theater,
  FileX,
  Eye,
  Trash2,
} from "lucide-react";

const risks = [
  {
    icon: UserX,
    title: "Теневой бизнес отдела продаж",
    description: "Менеджеры ведут клиентов мимо компании",
  },
  {
    icon: Theater,
    title: "Работа только с легкими клиентами",
    description: "Сложные заявки игнорируются и теряются",
  },
  {
    icon: AlertTriangle,
    title: "Имитация бурной деятельности",
    description: "Видимость работы без реальных результатов",
  },
  {
    icon: FileX,
    title: "Ложные причины отказа",
    description: "Менеджеры придумывают отговорки клиентов",
  },
  {
    icon: Eye,
    title: "Показ только успешных сделок",
    description: "Провалы скрываются от руководства",
  },
  {
    icon: Trash2,
    title: "Удаление следов ошибок",
    description: "История переписок уничтожается",
  },
];

export function Risks() {
  return (
    <section id="risks" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-accent">ЧЕМ ГРОЗИТ</span> ОТСУТСТВИЕ CRM В НАШИ ДНИ?
          </h2>
          <p className="text-xl text-gray-300">
            Вы даже НЕ ПОДОЗРЕВАЕТЕ, СКОЛЬКО ПРИБЫЛИ УЖЕ ПОТЕРЯЛИ БЕЗ CRM СИСТЕМЫ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {risks.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Icon size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <p className="text-xl text-gray-300">
            И это не конец списка, но страдает <span className="text-accent font-semibold">бизнес</span>!
          </p>
          <Button size="lg" className="text-base">
            Оставить заявку
          </Button>
        </div>
      </div>
    </section>
  );
}
