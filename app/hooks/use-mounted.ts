"use client";
import { useEffect, useState } from "react";

/**
 * Хук для проверки, что компонент смонтирован на клиенте
 * Предотвращает мерцание анимаций при SSR/hydration
 * Возвращает true после первого рендера на клиенте
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

