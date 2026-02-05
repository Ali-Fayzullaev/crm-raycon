import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Стартовый",
    price: "19 990",
    period: "30 дней",
    description: "Идеально для микробизнеса",
    features: [
      "До 3 менеджеров",
      "Мультичат WhatsApp",
      "Базовая аналитика",
      "Воронка продаж",
      "Email поддержка",
    ],
    popular: false,
  },
  {
    name: "Бизнес",
    price: "49 990",
    period: "30 дней",
    description: "Оптимально для растущего бизнеса",
    features: [
      "До 10 менеджеров",
      "Мультичат WhatsApp + Instagram",
      "Расширенная аналитика",
      "Воронка продаж",
      "Автораспределитель заявок",
      "Чат-бот",
      "Приоритетная поддержка",
    ],
    popular: true,
  },
  {
    name: "Корпоративный",
    price: "99 990",
    period: "30 дней",
    description: "Для крупного бизнеса",
    features: [
      "Неограниченное количество менеджеров",
      "Все каналы коммуникации",
      "Полная аналитика",
      "Все функции автоматизации",
      "API интеграции",
      "Персональный менеджер",
      "SLA 99.9%",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Выберите подходящий <span className="text-accent">тариф</span>
          </h2>
          <p className="text-lg text-gray-600">
            Прозрачные цены без скрытых платежей. Начните с бесплатного пробного
            периода.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? "border-accent shadow-xl scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-sm font-medium px-4 py-1 rounded-full">
                    Популярный
                  </span>
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">тг / {plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-accent" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Выбрать тариф
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
