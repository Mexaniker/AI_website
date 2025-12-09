export default function Hero() {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid pt-20">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
  
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">AI-менеджер нового поколения</span>
            </div>
  
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">AI-Менеджер Продаж,</span>
              <br />
              который работает 24/7
            </h1>
  
            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Полноценная замена менеджера по продажам. Отвечает за 5 секунд, квалифицирует лидов,
              записывает на встречи и интегрируется с любой CRM.
            </p>
  
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg font-semibold transition-all glow-effect text-lg"
              >
                Начать работу
              </a>
              <a
                href="#product"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-lg font-semibold transition-all border border-white/10 text-lg"
              >
                Узнать больше
              </a>
            </div>
  
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
              {[
                { value: '<5 сек', label: 'Время ответа' },
                { value: '24/7', label: 'Онлайн' },
                { value: '100%', label: 'Точность CRM' },
                { value: '∞', label: 'Масштабируемость' },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
    );
  }
  