import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, GitBranch, BarChart3, Bot, Users } from "lucide-react";

const features = [
  { icon: MessageSquare, label: "Мультичат" },
  { icon: Users, label: "Автораспределитель" },
  { icon: GitBranch, label: "Воронка продаж" },
  { icon: BarChart3, label: "Аналитика" },
  { icon: Bot, label: "Чат-боты" },
];

export function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Все каналы коммуникации в{" "}
                <span className="text-accent">Raycon CRM</span>
              </h1>
              <div className="flex flex-wrap gap-2">
                {features.map(({ icon: Icon, label }) => (
                  <Badge key={label} variant="secondary" className="gap-1.5">
                    <Icon size={14} />
                    {label}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Пока ваши менеджеры переключаются между окнами, вы теряете деньги.
                Raycon объединяет все чаты WhatsApp в одну систему, чтобы вы
                закрывали сделки за 30 секунд.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Больше никаких пропущенных сообщений с Мультичатом. Объедините
                диалоги, автоматизируйте ответы и смотрите, как растет ваша
                прибыль, пока Raycon CRM наводит порядок. Забудьте об Экселе.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Оставить заявку
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Узнать больше
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">200+</div>
                <div className="text-sm text-gray-500">Клиентов</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">2+</div>
                <div className="text-sm text-gray-500">Лет опыта</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">30%</div>
                <div className="text-sm text-gray-500">Рост конверсии</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl flex items-center justify-center border border-accent/20">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <MessageSquare size={48} className="text-accent" />
                </div>
                <p className="text-gray-500">Место для изображения интерфейса CRM</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <BarChart3 size={24} className="text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">+100%</div>
                  <div className="text-sm text-gray-500">Рост продаж</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
