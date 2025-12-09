import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Старт',
      price: '49 000',
      period: 'мес',
      description: 'Для малого бизнеса с одним каналом',
      features: [
        'До 500 диалогов в месяц',
        '1 канал связи',
        'Интеграция с CRM',
        'Базовая аналитика',
        'Email поддержка',
        'Настройка за 3 дня',
      ],
      popular: false,
    },
    {
      name: 'Профессиональный',
      price: '99 000',
      period: 'мес',
      description: 'Для среднего бизнеса',
      features: [
        'До 2000 диалогов в месяц',
        'Неограниченно каналов',
        'Интеграция с любой CRM',
        'Расширенная аналитика',
        'Приоритетная поддержка 24/7',
        'Настройка за 1 день',
        'Обучение на ваших диалогах',
        'Недельный мониторинг',
        'SLA гарантии',
      ],
      popular: true,
    },
    {
      name: 'Корпоративный',
      price: 'По запросу',
      period: '',
      description: 'Для крупного бизнеса',
      features: [
        'Безлимитные диалоги',
        'Все каналы связи',
        'Кастомная интеграция',
        'AI-аналитика и прогнозы',
        'Персональный менеджер',
        'Настройка за несколько часов',
        'Обучение команды',
        'Постоянный мониторинг',
        'Индивидуальные SLA',
        'API доступ',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Тарифы</span> под любой бизнес
          </h2>
          <p className="text-lg text-muted-foreground">
            Выберите оптимальный план для вашей компании
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all ${
                plan.popular
                  ? 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/50 scale-105'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4" fill="currentColor" />
                  Популярный
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  {plan.period && <span className="text-[#B176D6]">₽</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3 rounded-lg font-semibold text-center transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 glow-effect'
                    : 'bg-white/10 hover:bg-white/20 border border-white/10'
                }`}
              >
                Выбрать план
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Все тарифы включают белую перчатку настройки и 14 дней гарантии возврата средств
          </p>
        </div>
      </div>
    </section>
  );
}
