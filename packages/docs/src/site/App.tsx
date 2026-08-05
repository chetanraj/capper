import { Route, Routes } from 'react-router-dom';
import { AppShell } from './components/AppShell/AppShell';
import { GettingStartedPage } from './pages/GettingStartedPage';
import { HomePage } from './pages/Home';
import { AlertPage } from './pages/components/AlertPage';
import { BadgePage } from './pages/components/BadgePage';
import { BoxPage } from './pages/components/BoxPage';
import { ButtonPage } from './pages/components/ButtonPage';
import { CardPage } from './pages/components/CardPage';
import { CodePage } from './pages/components/CodePage';
import { IconPage } from './pages/components/IconPage';
import { InlinePage } from './pages/components/InlinePage';
import { InputPage } from './pages/components/InputPage';
import { LinkPage } from './pages/components/LinkPage';
import { StackPage } from './pages/components/StackPage';
import { TextPage } from './pages/components/TextPage';
import { ColorTokensPage } from './pages/tokens/ColorTokensPage';
import { RadiusShadowTokensPage } from './pages/tokens/RadiusShadowTokensPage';
import { SpacingTokensPage } from './pages/tokens/SpacingTokensPage';
import { TypographyTokensPage } from './pages/tokens/TypographyTokensPage';

export function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/getting-started" element={<GettingStartedPage />} />
        <Route path="/tokens/color" element={<ColorTokensPage />} />
        <Route path="/tokens/spacing" element={<SpacingTokensPage />} />
        <Route path="/tokens/typography" element={<TypographyTokensPage />} />
        <Route path="/tokens/radius-shadow" element={<RadiusShadowTokensPage />} />
        <Route path="/components/box" element={<BoxPage />} />
        <Route path="/components/text" element={<TextPage />} />
        <Route path="/components/code" element={<CodePage />} />
        <Route path="/components/button" element={<ButtonPage />} />
        <Route path="/components/input" element={<InputPage />} />
        <Route path="/components/link" element={<LinkPage />} />
        <Route path="/components/badge" element={<BadgePage />} />
        <Route path="/components/alert" element={<AlertPage />} />
        <Route path="/components/icon" element={<IconPage />} />
        <Route path="/components/stack" element={<StackPage />} />
        <Route path="/components/inline" element={<InlinePage />} />
        <Route path="/components/card" element={<CardPage />} />
      </Routes>
    </AppShell>
  );
}
