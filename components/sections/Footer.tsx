import { Send, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold">Raycon CRM</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              CRM-система для казахстанского бизнеса. Объединяем все каналы
              коммуникации и автоматизируем продажи.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Send size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#risks" className="text-gray-400 hover:text-white transition-colors">
                  Проблемы
                </a>
              </li>
              <li>
                <a href="#value" className="text-gray-400 hover:text-white transition-colors">
                  Решение
                </a>
              </li>
              <li>
                <a href="#plan" className="text-gray-400 hover:text-white transition-colors">
                  Как начать
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Тарифы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={16} />
                <a href="tel:+77001234567" className="hover:text-white transition-colors">
                  +7 (700) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={16} />
                <a href="mailto:info@Rayconcrm.kz" className="hover:text-white transition-colors">
                  info@Rayconcrm.kz
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>Казахстан, г. Алматы</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            2024 Raycon CRM. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Публичная оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
