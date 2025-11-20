import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Hand',
      title: 'Мануальная терапия',
      description: 'Комплексная работа с опорно-двигательным аппаратом для восстановления баланса тела'
    },
    {
      icon: 'Heart',
      title: 'Висцеральная остеопатия',
      description: 'Работа с внутренними органами для улучшения их функционирования'
    },
    {
      icon: 'Brain',
      title: 'Краниосакральная терапия',
      description: 'Мягкая техника работы с черепом и крестцом для гармонизации нервной системы'
    },
    {
      icon: 'Activity',
      title: 'Биодинамика',
      description: 'Глубокая работа с естественными ритмами организма'
    }
  ];

  const prices = [
    { service: 'Первичная консультация', duration: '60 минут', price: '5000' },
    { service: 'Повторный прием', duration: '45 минут', price: '4000' },
    { service: 'Детский прием', duration: '30 минут', price: '3500' },
    { service: 'Комплексная диагностика', duration: '90 минут', price: '7000' }
  ];

  const reviews = [
    {
      name: 'Анна Петровна',
      text: 'Обратилась с хроническими болями в спине. После трех сеансов почувствовала значительное облегчение. Ернар Советович - настоящий профессионал!',
      rating: 5
    },
    {
      name: 'Дмитрий К.',
      text: 'Долго искал хорошего остеопата. Здесь получил не только качественное лечение, но и подробные рекомендации по профилактике.',
      rating: 5
    },
    {
      name: 'Мария Светлова',
      text: 'Приводила ребенка после родовой травмы. Результат превзошел все ожидания. Спасибо за внимательное отношение!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Activity" className="text-accent" size={32} />
              <span className="text-xl font-semibold text-primary">Остеопат Ернар Советович</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'prices', label: 'Цены' },
                { id: 'reviews', label: 'Отзывы' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contact')} className="hidden md:inline-flex">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-20 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Восстановление здоровья через остеопатию
              </h1>
              <p className="text-lg text-muted-foreground">
                Помогаю людям избавиться от боли и вернуться к активной жизни. 
                Индивидуальный подход, современные методики, более 15 лет практики.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="text-base">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на прием
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Узнать больше
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">2000+</div>
                  <div className="text-sm text-muted-foreground">пациентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">98%</div>
                  <div className="text-sm text-muted-foreground">довольных</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/e04ff730-d4fc-41f3-8a22-933e618c3585/files/9e1a9223-eaf3-472f-b7bd-0142d7de9a7d.jpg"
                  alt="Остеопат Ернар Советович"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-xl">
                <Icon name="Award" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Использую современные остеопатические техники для комплексного восстановления организма
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-accent" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Цены</h2>
            <p className="text-lg text-muted-foreground">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {prices.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-6 hover:bg-accent/5 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-primary mb-1">{item.service}</h3>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {item.duration}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">{item.price} ₽</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="text-center mt-8">
            <Button size="lg" onClick={() => scrollToSection('contact')}>
              Записаться на прием
            </Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Отзывы пациентов</h2>
            <p className="text-lg text-muted-foreground">
              Что говорят о лечении те, кто уже прошел курс
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Запишитесь на консультацию</h2>
          <p className="text-lg mb-8 opacity-90">
            Позвоните или напишите, чтобы записаться на прием
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <a href="tel:+79991234567" className="flex items-center text-xl hover:text-accent transition-colors">
              <Icon name="Phone" size={24} className="mr-2" />
              +7 (999) 123-45-67
            </a>
            <a href="mailto:ernar@osteopat.ru" className="flex items-center text-xl hover:text-accent transition-colors">
              <Icon name="Mail" size={24} className="mr-2" />
              ernar@osteopat.ru
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <a 
              href="https://chat.whatsapp.com/JdS7CipprOuGoFpzuhZeEa" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-lg hover:text-accent transition-colors bg-white/10 px-6 py-3 rounded-lg hover:bg-white/20"
            >
              <Icon name="MessageCircle" size={22} className="mr-2" />
              Чат WhatsApp
            </a>
            <a 
              href="https://t.me/yernarpotok" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-lg hover:text-accent transition-colors bg-white/10 px-6 py-3 rounded-lg hover:bg-white/20"
            >
              <Icon name="Send" size={22} className="mr-2" />
              Telegram канал
            </a>
          </div>
          <div className="flex items-center justify-center text-lg opacity-90">
            <Icon name="MapPin" size={24} className="mr-2" />
            г. Москва, ул. Примерная, д. 10
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-secondary border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Остеопат Ернар Советович. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;