// clsx : 여러 클래스 이름 조건에 따라 동적 자동 구성
import { clsx, type ClassValue } from "clsx"
// tailwind css의 중복 클래스를 병합하여 최적화, 동일한 css 속성 시 마지막 클래스로 덮어씀
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  // clsx : 여러 클래스들을 받아서 조건부로 클래스 이름 결정
  // txMerge : 같은 css 속성 여러 클래스가 있을 수 있을 때 중복 클래스를 병합하여 불필요한 클래스 충돌 방지
  return twMerge(clsx(inputs))
}
