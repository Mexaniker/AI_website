import { Check } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    {
      title: 'DFY White-Glove подход',
      description: 'Мы делаем всё за вас - от настройки до запуска. Никакой технической работы с вашей стороны.',
    },
    {
      title: 'Обучение на реальных диалогах',
      description: 'AI учится на ваших лучших продажах и адаптируется под ваш стиль общения.',
    },
    {
      title: 'Оптимизация CRM для AI',
      description: 'Настраиваем вашу CRM так, чтобы AI работал максимально эффективно.',
    },
    {
      title: 'SLA гарантии',
      description: 'Документированные гарантии времени ответа и качества обработки лидов.',
    },
    {
      title: 'Недельный мониторинг',
      description: 'Первую неделю мы следим за каждым диалогом и оптимизируем работу AI.',
    },
    {
      title: 'Полноценная замена сотрудника',
      description: 'Не просто чат-бот, а настоящий AI-менеджер, который заменяет живого сотрудника.',
    },
  ];

  return (
    <section id="advantages" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Почему выбирают <span className="gradient-text">Azori</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            То, чего нет у конкурентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-cyan-500/50 transition-all group"
            >
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-cyan-400" />
              </div>

              <h3 className="text-xl font-semibold mb-3 pr-8">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-background" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Более 100+ компаний уже автоматизировали продажи с Azori
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
