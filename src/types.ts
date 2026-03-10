/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'home' | 'about' | 'services' | 'remote' | 'web-design' | 'contact' | 'payment' | 'privacy';

export interface NavItem {
  id: Page;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'remote', label: 'Remote Services' },
  { id: 'web-design', label: 'Web Design' },
  { id: 'contact', label: 'Contact Us' },
  { id: 'payment', label: 'Make Payment' },
];
