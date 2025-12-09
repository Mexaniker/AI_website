import { TrendingUp, Users, Clock } from 'lucide-react';

export default function Cases() {
  const cases = [
    {
      company: 'Медицинская клиника',
      industry: 'Здравоохранение',
      results: [
        { icon: TrendingUp, value: '+340%', label: 'Рост записей' },
        { icon: Clock, value: '24/7', label: 'Обработка заявок' },
        { icon: Users, value: '95%', label: 'Довольных клиентов' },
      ],
      description: 'AI-менеджер обрабатывает все входящие звонки и сообщения, записывает пациентов на приём и отвечает на типовые вопросы.',
    },
    {
      company: 'IT-компания',
      industry: 'Технологии',
      results: [
        { icon: TrendingUp, value: '+280%', label: 'Конверсия в встречи' },
        { icon: Clock, value: '3 сек', label: 'Время первого ответа' },
        { icon: Users, value: '100%', label: 'Квалификация лидов' },
      ],
      description: 'Автоматическая квалификация лидов по 15 параметрам и запись на демо только целевых клиентов.',
    },
    {
      company: 'Фитнес-клуб',
      industry: 'Спорт и фитнес',
      results: [
        { icon: TrendingUp, value: '+520%', label: 'Продаж абонементов' },
        { icon: Clock, value: '0', label: 'Потерянных лидов' },
        { icon: Users, value: '87%', label: 'Возврат клиентов' },
      ],
      description: 'AI напоминает о пробных тренировках, продаёт абонементы и возвращает клиентов, которые не ответили.',
    },
  ];

  return (
    <section id="cases" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Кейсы</span> наших клиентов
          </h2>
          <p className="text-lg text-muted-foreground">
            Реальные результаты внедрения AI-менеджера
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:scale-105 backdrop-blur-sm"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{caseItem.company}</h3>
                <p className="text-sm text-cyan-400">{caseItem.industry}</p>
              </div>

              <div className="space-y-4 mb-6">
                {caseItem.results.map((result, idx) => {
                  const Icon = result.icon;
                  return (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-xl font-bold gradient-text">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {caseItem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
