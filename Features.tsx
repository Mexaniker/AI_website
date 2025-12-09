import { Zap, Shield, Target, Calendar, RefreshCw, Database, FileCheck, TrendingUp } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Ответ за 5 секунд',
      description: 'AI отвечает моментально в любом канале связи - WhatsApp, Telegram, email, чат на сайте.',
    },
    {
      icon: Shield,
      title: 'Запретные сценарии',
      description: 'Защита от ошибок через настраиваемые правила поведения и ограничения.',
    },
    {
      icon: Target,
      title: 'Квалификация лидов',
      description: 'AI самостоятельно квалифицирует лидов по вашим критериям и приоритизирует обработку.',
    },
    {
      icon: Calendar,
      title: 'Автозапись на встречи',
      description: 'Интеграция с календарём и CRM для автоматической записи клиентов на встречи.',
    },
    {
      icon: RefreshCw,
      title: 'Добивание тёплых лидов',
      description: 'AI автоматически следит за неответившими клиентами и возвращает их в воронку.',
    },
    {
      icon: Database,
      title: 'Интеграция с CRM',
      description: 'Работает с Битрикс24, AmoCRM, YClients, EnvyCRM и любыми другими системами.',
    },
    {
      icon: FileCheck,
      title: 'Автозаполнение полей',
      description: 'Все данные автоматически попадают в CRM без ошибок и человеческого фактора.',
    },
    {
      icon: TrendingUp,
      title: 'Аналитика эффективности',
      description: 'Автоматический расчёт конверсий, записей, потерь и других метрик.',
    },
  ];

  return (
    <section id="product" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Возможности</span> AI-Менеджера
          </h2>
          <p className="text-lg text-muted-foreground">
            Полный набор инструментов для автоматизации отдела продаж
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:scale-105 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
