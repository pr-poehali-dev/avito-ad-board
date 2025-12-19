import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Link } from 'react-router-dom';

const userStats = {
  totalListings: 24,
  activeListings: 18,
  soldItems: 42,
  totalRevenue: 456780,
  monthRevenue: 89500,
  views: 12456,
  favorites: 567,
  messages: 234,
  rating: 4.8,
  reviewsCount: 156,
};

const recentListings = [
  {
    id: 1,
    title: 'iPhone 14 Pro Max 256GB',
    price: 89990,
    status: 'active',
    views: 156,
    favorites: 23,
    image: '📱',
    posted: '2 часа назад',
  },
  {
    id: 2,
    title: 'MacBook Air M2 2023',
    price: 124990,
    status: 'sold',
    views: 234,
    favorites: 45,
    image: '💻',
    posted: '3 дня назад',
  },
  {
    id: 3,
    title: 'Диван угловой современный',
    price: 45000,
    status: 'active',
    views: 89,
    favorites: 12,
    image: '🛋️',
    posted: '1 день назад',
  },
];

const salesHistory = [
  {
    id: 1,
    item: 'iPhone 13 Pro',
    buyer: 'Александр К.',
    price: 65000,
    date: '15.12.2024',
    status: 'completed',
  },
  {
    id: 2,
    item: 'PlayStation 5',
    buyer: 'Мария С.',
    price: 45000,
    date: '12.12.2024',
    status: 'completed',
  },
  {
    id: 3,
    item: 'Samsung Galaxy S23',
    buyer: 'Дмитрий В.',
    price: 52000,
    date: '10.12.2024',
    status: 'completed',
  },
  {
    id: 4,
    item: 'Велосипед Scott',
    buyer: 'Елена П.',
    price: 35000,
    date: '08.12.2024',
    status: 'pending',
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl">
                <Icon name="ShoppingBag" className="text-white" size={28} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                МаркетПлейс
              </h1>
            </Link>

            <div className="flex items-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/">
                  <Icon name="Home" size={20} className="mr-2" />
                  На главную
                </Link>
              </Button>
              <Avatar className="h-10 w-10">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                  ИП
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <Avatar className="h-20 w-20">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl">
                ИП
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-3xl font-bold">Иван Петров</h2>
              <p className="text-muted-foreground">Продавец с июня 2023</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 font-semibold">{userStats.rating}</span>
                </div>
                <span className="text-muted-foreground">({userStats.reviewsCount} отзывов)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardDescription>Активных объявлений</CardDescription>
              <CardTitle className="text-3xl">{userStats.activeListings}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Всего: {userStats.totalListings}
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader className="pb-3">
              <CardDescription>Продано товаров</CardDescription>
              <CardTitle className="text-3xl">{userStats.soldItems}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-green-600 font-medium">
                +12 за месяц
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader className="pb-3">
              <CardDescription>Выручка за месяц</CardDescription>
              <CardTitle className="text-3xl">{userStats.monthRevenue.toLocaleString('ru-RU')} ₽</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={65} className="h-2" />
              <div className="text-sm text-muted-foreground mt-2">
                65% от цели
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardDescription>Общая выручка</CardDescription>
              <CardTitle className="text-3xl">{userStats.totalRevenue.toLocaleString('ru-RU')} ₽</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                За все время
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Eye" size={20} className="text-primary" />
                Просмотры
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{userStats.views.toLocaleString('ru-RU')}</div>
              <div className="text-sm text-green-600 mt-1">+15% за неделю</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Heart" size={20} className="text-secondary" />
                В избранном
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{userStats.favorites}</div>
              <div className="text-sm text-green-600 mt-1">+8% за неделю</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MessageSquare" size={20} className="text-accent" />
                Сообщения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{userStats.messages}</div>
              <div className="text-sm text-muted-foreground mt-1">За последний месяц</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="listings">Мои объявления</TabsTrigger>
            <TabsTrigger value="sales">История продаж</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Недавняя активность</CardTitle>
                <CardDescription>Ваши последние объявления и их статистика</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentListings.map((listing) => (
                    <div key={listing.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                      <div className="text-4xl">{listing.image}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{listing.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span>{listing.posted}</span>
                          <span className="flex items-center gap-1">
                            <Icon name="Eye" size={14} />
                            {listing.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Heart" size={14} />
                            {listing.favorites}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{listing.price.toLocaleString('ru-RU')} ₽</div>
                        <Badge variant={listing.status === 'active' ? 'default' : 'secondary'}>
                          {listing.status === 'active' ? 'Активно' : 'Продано'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="listings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Все объявления</CardTitle>
                <CardDescription>Управление вашими товарами и услугами</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Товар</TableHead>
                      <TableHead>Цена</TableHead>
                      <TableHead>Просмотры</TableHead>
                      <TableHead>Избранное</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead className="text-right">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentListings.map((listing) => (
                      <TableRow key={listing.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{listing.image}</span>
                            {listing.title}
                          </div>
                        </TableCell>
                        <TableCell>{listing.price.toLocaleString('ru-RU')} ₽</TableCell>
                        <TableCell>{listing.views}</TableCell>
                        <TableCell>{listing.favorites}</TableCell>
                        <TableCell>
                          <Badge variant={listing.status === 'active' ? 'default' : 'secondary'}>
                            {listing.status === 'active' ? 'Активно' : 'Продано'}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Icon name="Edit" size={16} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sales" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>История продаж</CardTitle>
                <CardDescription>Все ваши завершенные и текущие сделки</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Товар</TableHead>
                      <TableHead>Покупатель</TableHead>
                      <TableHead>Сумма</TableHead>
                      <TableHead>Дата</TableHead>
                      <TableHead>Статус</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {salesHistory.map((sale) => (
                      <TableRow key={sale.id}>
                        <TableCell className="font-medium">{sale.item}</TableCell>
                        <TableCell>{sale.buyer}</TableCell>
                        <TableCell className="font-semibold">{sale.price.toLocaleString('ru-RU')} ₽</TableCell>
                        <TableCell>{sale.date}</TableCell>
                        <TableCell>
                          <Badge variant={sale.status === 'completed' ? 'default' : 'secondary'}>
                            {sale.status === 'completed' ? 'Завершено' : 'В обработке'}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
