import Nodo from './Nodo'
import ArbolNario from './ArbolNario'

const menu = new Nodo('Menu', '/', 'RootComponent')

const profile = new Nodo('Profile', '/profile', 'ProfileComponent')
const messages = new Nodo('Messages', '/messages', 'MessagesComponent')
const settings = new Nodo('Settings', '/settings', 'SettingsComponent')
const help = new Nodo('Help', '/help', 'HelpComponent')
const logout = new Nodo('Logout', '/logout', 'LogoutComponent')

const account = new Nodo('Account', '/settings/account', 'AccountComponent')
const profileSettings = new Nodo('Profile Settings', '/settings/profile', 'ProfileSettingsComponent')
const security = new Nodo('Security & Privacy', '/settings/security', 'SecurityComponent')
const password = new Nodo('Password', '/settings/password', 'PasswordComponent')
const notification = new Nodo('Notification', '/settings/notification', 'NotificationComponent')

const faqs = new Nodo('FAQs', '/help/faqs', 'FaqsComponent')
const ticket = new Nodo('Submit a Ticket', '/help/ticket', 'TicketComponent')
const network = new Nodo('Network Status', '/help/network', 'NetworkComponent')

settings.agregarHijo(account)
settings.agregarHijo(profileSettings)
settings.agregarHijo(security)
settings.agregarHijo(password)
settings.agregarHijo(notification)

help.agregarHijo(faqs)
help.agregarHijo(ticket)
help.agregarHijo(network)

menu.agregarHijo(profile)
menu.agregarHijo(messages)
menu.agregarHijo(settings)
menu.agregarHijo(help)
menu.agregarHijo(logout)

const arbolMenu = new ArbolNario(menu)

export default arbolMenu