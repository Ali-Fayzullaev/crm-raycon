import { Button } from "@/components/ui/button";
import { FileText, Phone, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Оставьте заявку",
    description: "С вами свяжутся или выберите дату/время для созвона.",
  },
  {
    icon: Phone,
    step: "02",
    title: "Ожидайте звонка",
    description: "Менеджер ответит на все ваши вопросы.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Подключение онлайн",
    description: "Первые результаты после 10 минут настройки.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Начните продавать",
    description: "Получите полный контроль над продажами.",
  },
];

export function Plan() {
  return (
    <section id="plan" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-accent">4 ШАГА</span> НАВСТРЕЧУ К УСПЕХУ
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            К нам обращаются предприниматели разных ниш для решения проблем
          </p>
          <p className="text-gray-500">
            Ежедневно к нам обращаются бизнесы разного направления и остаются
            довольными
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map(({ icon: Icon, step, title, description }) => (
            <div key={step} className="relative">
              <div className="bg-gray-50 rounded-2xl p-6 h-full hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-accent/20 mb-4">{step}</div>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
              {step !== "04" && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="text-base">
            Оставить заявку
          </Button>
        </div>
      </div>
    </section>
  );
}
