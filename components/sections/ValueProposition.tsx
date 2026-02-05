import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  TrendingUp,
  PieChart,
  Bot,
  CheckCircle,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Тотальный контроль над МОП",
    description: "Видите каждый диалог, удаленное сообщение и скорость ответов.",
  },
  {
    icon: Lock,
    title: "100% безопасность базы",
    description: "Клиенты остаются в активе даже при увольнении менеджера.",
  },
  {
    icon: TrendingUp,
    title: "Рост конверсии на 20-30%",
    description: "Благодаря автораспределению и чат-ботам.",
  },
  {
    icon: PieChart,
    title: "Прозрачная аналитика",
    description: "Управляйте цифрами, а не гадайте на этапах воронки.",
  },
  {
    icon: Bot,
    title: "Автоматизация рутины",
    description: "Чат-бот берет на себя первичные вопросы.",
  },
];

export function ValueProposition() {
  return (
    <section id="value" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl flex items-center justify-center border border-accent/20">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <PieChart size={40} className="text-accent" />
                </div>
                <p className="text-gray-500">Место для изображения аналитики</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Мы постоянно видим компании, которые упускают прибыль
              </h2>
              <p className="text-lg text-gray-600">
                Потому что вы не видите переписки, а менеджеры забывают про старые чаты.
              </p>
              <p className="text-2xl font-bold text-accent">
                У НАС ЕСТЬ РЕШЕНИЕ
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Именно поэтому мы разработали Rayson CRM — проверенную систему для
              микро- и макробизнеса, которая предоставляет вам мощный Мультичат,
              чтобы вы точно видели: о чем, как и когда ваши менеджеры говорят с
              клиентами.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Интерфейс системы разработан таким образом, чтобы снизить когнитивную
              нагрузку на сотрудников. Это простая CRM-система, которую не надо
              учиться днями — новый менеджер начинает продавать через 20 минут.
            </p>

            <Button size="lg">Начать использовать</Button>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Что вы получите
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full font-semibold">
              <CheckCircle size={20} />
              МЫ ПОМОГЛИ НЕ ОДНОМУ КАЗАХСТАНСКОМУ БИЗНЕСУ УВИДЕТЬ РЕАЛЬНУЮ КАРТИНУ ДЕЛ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
