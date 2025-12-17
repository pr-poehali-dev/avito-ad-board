import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const cities = [
  'Москва',
  'Санкт-Петербург',
  'Новосибирск',
  'Екатеринбург',
  'Казань',
  'Нижний Новгород',
  'Челябинск',
  'Самара',
  'Омск',
  'Ростов-на-Дону',
  'Уфа',
  'Красноярск',
  'Воронеж',
  'Пермь',
  'Волгоград',
];

const categories = [
  { name: 'Электроника', icon: 'Smartphone', count: 1234 },
  { name: 'Одежда', icon: 'Shirt', count: 890 },
  { name: 'Недвижимость', icon: 'Home', count: 567 },
  { name: 'Транспорт', icon: 'Car', count: 432 },
  { name: 'Мебель', icon: 'Armchair', count: 321 },
  { name: 'Услуги', icon: 'Briefcase', count: 654 },
  { name: 'Спорт', icon: 'Dumbbell', count: 234 },
  { name: 'Хобби', icon: 'Palette', count: 456 },
];

const listings = [
  {
    id: 1,
    title: 'iPhone 14 Pro Max 256GB',
    price: 89990,
    location: 'Москва',
    image: '📱',
    condition: 'Новое',
    posted: '2 часа назад',
    views: 156,
    favorites: 23,
  },
  {
    id: 2,
    title: 'MacBook Air M2 2023',
    price: 124990,
    location: 'Санкт-Петербург',
    image: '💻',
    condition: 'Б/у',
    posted: '5 часов назад',
    views: 234,
    favorites: 45,
  },
  {
    id: 3,
    title: 'Диван угловой современный',
    price: 45000,
    location: 'Казань',
    image: '🛋️',
    condition: 'Новое',
    posted: '1 день назад',
    views: 89,
    favorites: 12,
  },
  {
    id: 4,
    title: 'BMW X5 2019',
    price: 3450000,
    location: 'Москва',
    image: '🚗',
    condition: 'Б/у',
    posted: '3 часа назад',
    views: 456,
    favorites: 78,
  },
  {
    id: 5,
    title: 'Квартира 2-комнатная',
    price: 8500000,
    location: 'Новосибирск',
    image: '🏠',
    condition: 'Новое',
    posted: '2 дня назад',
    views: 567,
    favorites: 91,
  },
  {
    id: 6,
    title: 'Велосипед горный Scott',
    price: 35000,
    location: 'Екатеринбург',
    image: '🚴',
    condition: 'Б/у',
    posted: '4 часа назад',
    views: 123,
    favorites: 34,
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl">
                <Icon name="ShoppingBag" className="text-white" size={28} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                МаркетПлейс
              </h1>
            </div>

            <div className="flex-1 max-w-2xl flex gap-2">
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-[200px] h-12">
                  <Icon name="MapPin" size={18} className="mr-2" />
                  <SelectValue placeholder="Город" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все города</SelectItem>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="relative flex-1">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Поиск товаров и услуг..."
                  className="pl-10 pr-4 h-12 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="relative">
                <Icon name="Heart" size={20} />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent">
                  5
                </Badge>
              </Button>
              <Button variant="outline" size="icon" className="relative">
                <Icon name="MessageSquare" size={20} />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-secondary">
                  3
                </Badge>
              </Button>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Plus" size={20} className="mr-2" />
                Разместить
              </Button>
              <Avatar className="cursor-pointer">
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                  ВП
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8 animate-fade-in">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Icon name="Grid3x3" size={24} className="text-primary" />
            Категории
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {categories.map((category, index) => (
              <Card
                key={category.name}
                className="cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-scale-in border-2 hover:border-primary"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-4 text-center">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon name={category.icon as any} size={28} className="text-primary" />
                  </div>
                  <p className="font-semibold text-sm mb-1">{category.name}</p>
                  <p className="text-xs text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="new">Новые</TabsTrigger>
                <TabsTrigger value="popular">Популярные</TabsTrigger>
                <TabsTrigger value="nearby">Рядом</TabsTrigger>
              </TabsList>
            </Tabs>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="ml-4"
            >
              <Icon name="SlidersHorizontal" size={20} className="mr-2" />
              Фильтры
            </Button>
          </div>

          {showFilters && (
            <Card className="mb-6 animate-slide-up">
              <CardHeader>
                <CardTitle>Фильтрация</CardTitle>
                <CardDescription>Настройте параметры поиска</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Ценовой диапазон</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      placeholder="От"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-32"
                    />
                    <span className="text-muted-foreground">—</span>
                    <Input
                      type="number"
                      placeholder="До"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000000])}
                      className="w-32"
                    />
                  </div>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={10000000}
                    step={1000}
                    className="mt-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    от {priceRange[0].toLocaleString('ru-RU')} ₽ до {priceRange[1].toLocaleString('ru-RU')} ₽
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Состояние товара</Label>
                  <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите состояние" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Любое</SelectItem>
                      <SelectItem value="new">Новое</SelectItem>
                      <SelectItem value="used">Б/у</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Срок размещения</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите период" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">За сегодня</SelectItem>
                      <SelectItem value="week">За неделю</SelectItem>
                      <SelectItem value="month">За месяц</SelectItem>
                      <SelectItem value="all">За всё время</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Город</Label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите город" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все города</SelectItem>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="photo-only" />
                  <Label htmlFor="photo-only">Только с фото</Label>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-primary to-secondary">
                    Применить фильтры
                  </Button>
                  <Button variant="outline" onClick={() => {
                    setPriceRange([0, 10000000]);
                    setSelectedCondition('all');
                    setSelectedCity('all');
                  }}>
                    Сбросить
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Icon name="Sparkles" size={24} className="text-accent" />
            Объявления
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing, index) => (
              <Card
                key={listing.id}
                className="cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center text-8xl">
                    {listing.image}
                  </div>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon name="Heart" size={18} />
                  </Button>
                  <Badge className="absolute top-2 left-2 bg-white/90 text-foreground">
                    {listing.condition}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg line-clamp-2">{listing.title}</CardTitle>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <Icon name="MapPin" size={14} />
                    {listing.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-2xl font-bold text-primary">
                      {listing.price.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Eye" size={14} />
                      {listing.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Heart" size={14} />
                      {listing.favorites}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {listing.posted}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    Написать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" className="min-w-[200px]">
            Показать ещё
            <Icon name="ChevronDown" size={20} className="ml-2" />
          </Button>
        </div>
      </main>

      <footer className="bg-card border-t mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Icon name="ShoppingBag" className="text-primary" size={20} />
                МаркетПлейс
              </h3>
              <p className="text-sm text-muted-foreground">
                Современная доска объявлений для покупки и продажи товаров
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">О платформе</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer">О нас</li>
                <li className="hover:text-primary cursor-pointer">Правила</li>
                <li className="hover:text-primary cursor-pointer">Безопасность</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Помощь</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer">FAQ</li>
                <li className="hover:text-primary cursor-pointer">Поддержка</li>
                <li className="hover:text-primary cursor-pointer">Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Социальные сети</h4>
              <div className="flex gap-2">
                <Button size="icon" variant="outline">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;