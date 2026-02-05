import {
  MessageSquare,
  Users,
  BarChart3,
  Settings,
  Clock,
  Zap,
} from "lucide-react";

const keywords = [
  "CRM для продаж",
  "автоматизация продаж",
  "мультичат для бизнеса",
  "CRM для малого бизнеса",
  "CRM аналитика",
  "управление воронкой",
];

export function SEOSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            <span className="text-accent">МЫ ЗНАЕМ</span>, ЧТО НУЖНО ВАМ
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Проблема в том, что пока сообщения в WhatsApp и Instagram разрознены,
              вы пытаетесь навести порядок, но обычно CRM-система часто оказывается
              слишком сложной и дорогой для внедрения. В итоге вы остаетесь один на
              один с хаосом: менеджеры путаются в диалогах, учет клиентов не ведется,
              а аналитика продаж отсутствует.
            </p>

            <p>
              Мы верим, что автоматизация бизнеса не должна быть громоздкой. Вы не
              должны тратить месяцы на настройку. Именно поэтому мы создали Raycon —
              CRM для тех, кто ценит свое время. Это мощный мультичат, который
              объединяет все каналы связи в единое окно и наводит порядок сразу.
            </p>
          </div>

          <div className="my-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Наш план для вашего спокойствия:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Подключение CRM для малого бизнеса за 20 минут
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Zap size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Чат-бот и автораспределитель мгновенно отвечают клиентам
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <BarChart3 size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Открывайте раздел CRM аналитика и видите реальный рост
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            Свяжитесь с нами, чтобы внедрить CRM для продаж уже сегодня. Перестаньте
            переживать из-за барьеров в работе сотрудников. Вместо этого получите
            прозрачное управление воронкой и верните себе полный контроль над
            бизнесом.
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 border border-gray-200"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
