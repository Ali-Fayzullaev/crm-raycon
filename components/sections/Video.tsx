import { Button } from "@/components/ui/button";
import { Play, Send, Instagram } from "lucide-react";

export function Video() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Узнайте больше о <span className="text-accent">Raycon CRM</span>
          </h2>
          <p className="text-lg text-gray-600">
            Посмотрите короткое видео о возможностях системы
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 md:w-24 md:h-24 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Play size={32} className="text-white ml-1" fill="white" />
              </button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="text-white text-center">
                <p className="text-lg">Место для видео</p>
                <p className="text-sm">Длительность: до 3 минут</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <p className="text-gray-600">Следите за нами в соцсетях:</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Send size={18} />
                Telegram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Instagram size={18} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
