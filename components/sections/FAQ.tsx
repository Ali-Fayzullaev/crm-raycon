"use client";

import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "Как быстро можно внедрить Raycon CRM?",
    answer:
      "Внедрение занимает всего 20 минут. После регистрации вы сразу получаете доступ к системе, подключаете мессенджеры и начинаете работать. Наши специалисты помогут с настройкой бесплатно.",
    important: true,
  },
  {
    question: "Нужно ли устанавливать дополнительное ПО?",
    answer:
      "Нет, Raycon CRM работает полностью в браузере. Вам не нужно ничего устанавливать — достаточно открыть сайт и войти в личный кабинет с любого устройства.",
    important: false,
  },
  {
    question: "Как работает чат-бот?",
    answer:
      "Чат-бот автоматически отвечает на типовые вопросы клиентов, собирает контактные данные и квалифицирует заявки. Вы настраиваете сценарии под свой бизнес, и бот работает 24/7 без выходных.",
    important: true,
  },
  {
    question: "Можно ли интегрировать с другими системами?",
    answer:
      "Да, Raycon CRM поддерживает интеграцию с популярными сервисами: 1С, Kaspi, платежными системами и другими. На тарифе «Корпоративный» доступно API для любых интеграций.",
    important: false,
  },
  {
    question: "Есть ли ограничения по количеству клиентов?",
    answer:
      "Нет ограничений по количеству клиентов в базе. Вы можете хранить неограниченное число контактов и историю всех переписок на любом тарифе.",
    important: true,
  },
  {
    question: "Как обеспечивается безопасность данных?",
    answer:
      "Все данные шифруются и хранятся на защищенных серверах. Доступ к системе только по паролю, есть двухфакторная аутентификация. При увольнении менеджера база остается у вас.",
    important: false,
  },
  {
    question: "Можно ли протестировать перед покупкой?",
    answer:
      "Да, мы предоставляем бесплатный пробный период 14 дней с полным функционалом. Вы сможете оценить все возможности системы без обязательств.",
    important: true,
  },
  {
    question: "Какая поддержка предоставляется?",
    answer:
      "Техническая поддержка работает ежедневно. На тарифе «Стартовый» — по email, на «Бизнес» — приоритетная поддержка в чате, на «Корпоративный» — персональный менеджер.",
    important: false,
  },
  {
    question: "Как часто обновляется система?",
    answer:
      "Мы регулярно выпускаем обновления с новыми функциями и улучшениями. Все обновления применяются автоматически, вам не нужно ничего делать.",
    important: false,
  },
  {
    question: "Можно ли настроить под свой бизнес?",
    answer:
      "Да, вы можете настроить воронку продаж, этапы сделок, шаблоны сообщений и сценарии чат-бота под специфику вашего бизнеса.",
    important: false,
  },
  {
    question: "Есть ли у вас скрытые платежи?",
    answer:
      "Нет, все цены указаны открыто. Вы платите только за выбранный тариф. Никаких дополнительных комиссий или скрытых платежей.",
    important: false,
  },
  {
    question: "Вы работаете по всему Казахстану?",
    answer:
      "Да, Raycon CRM доступна по всему Казахстану. Система работает онлайн, поэтому вы можете подключиться из любого города.",
    important: false,
  },
  {
    question: "Можно ли подключиться в рассрочку или кредит?",
    answer:
      "Нет, так как ценовая политика Raycon CRM ориентирована на доступные цены. Наши тарифы рассчитаны так, чтобы быть доступными для любого бизнеса.",
    important: false,
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые <span className="text-accent">вопросы</span>
          </h2>
          <p className="text-lg text-gray-600">
            Ответы на популярные вопросы о Raycon CRM
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "border rounded-2xl overflow-hidden transition-colors",
                openIndex === index
                  ? "border-accent bg-accent/5"
                  : "border-gray-200 bg-white hover:border-gray-300"
              )}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-3">
                  {item.important && (
                    <span className="shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                      <Star size={14} className="text-accent" fill="currentColor" />
                    </span>
                  )}
                  <span
                    className={cn(
                      "font-semibold",
                      openIndex === index ? "text-accent" : "text-gray-900"
                    )}
                  >
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  size={20}
                  className={cn(
                    "shrink-0 text-gray-400 transition-transform",
                    openIndex === index && "rotate-180 text-accent"
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed pl-9">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
