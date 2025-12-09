import { Cpu, Shield, Zap, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Cpu,
      title: 'Передовые технологии',
      description: 'Используем самые современные AI-модели и постоянно совершенствуем алгоритмы.',
    },
    {
      icon: Shield,
      title: 'Надёжность',
      description: 'SLA гарантии, резервное копирование и круглосуточный мониторинг систем.',
    },
    {
      icon: Zap,
      title: 'Скорость внедрения',
      description: 'От заявки до полноценной работы AI-менеджера — всего 1-3 дня.',
    },
    {
      icon: Users,
      title: 'Поддержка',
      description: 'Персональный менеджер и техподдержка 24/7 для всех клиентов.',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              О <span className="gradient-text">Azori</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Мы создаём AI-решения для автоматизации отделов продаж. Наша миссия —
                дать каждой компании доступ к технологиям, которые раньше были доступны только крупному бизнесу.
              </p>
              <p className="text-lg">
                В отличие от обычных чат-ботов, наш AI-менеджер — это полноценная замена живого сотрудника.
                Он понимает контекст, обучается на ваших лучших продажах и адаптируется под ваш бизнес.
              </p>
              <p className="text-lg">
                Мы не просто продаём технологию — мы делаем всё за вас. От настройки до запуска,
                от обучения AI до оптимизации ваших процессов.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold gradient-text mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Обработанных лидов</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
