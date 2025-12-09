import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="gradient-text">Azori</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              AI-менеджер продаж нового поколения для автоматизации вашего бизнеса.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#product" className="text-muted-foreground hover:text-foreground transition-colors">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#advantages" className="text-muted-foreground hover:text-foreground transition-colors">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#cases" className="text-muted-foreground hover:text-foreground transition-colors">
                  Кейсы
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Условия использования
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                Email:{' '}
                <a href="mailto:hello@azori.ai" className="hover:text-foreground transition-colors">
                  hello@azori.ai
                </a>
              </li>
              <li className="text-muted-foreground">
                Телефон:{' '}
                <a href="tel:+78001234567" className="hover:text-foreground transition-colors">
                  +7 (800) 123-45-67
                </a>
              </li>
              <li className="text-muted-foreground">
                Москва, Россия
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Azori. Все права защищены.</p>
        </div>
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />
    </footer>
  );
}
