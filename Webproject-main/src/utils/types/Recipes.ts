export interface IRecipeResponse {
  count: number
  results: Result[]
}

export interface Metadata {
  [key: string]: any
}

export interface Result {
  is_one_top: boolean
  cook_time_minutes: number | null
  promotion: Promotion
  keywords: string
  show: Show
  servings_noun_plural: ServingsNounPlural
  canonical_id: string
  show_id: number
  draft_status: DraftStatus
  sections: Section[]
  tags: Tag[]
  thumbnail_alt_text: string
  credits: Brand[]
  topics: Topic[]
  slug: string
  servings_noun_singular: string
  video_url: null | string
  prep_time_minutes: number | null
  name: string
  buzz_id: null
  thumbnail_url: string
  is_shoppable: boolean
  video_id: number | null
  compilations: Compilation[]
  num_servings: number
  brand: Brand | null
  nutrition: Nutrition
  tips_and_ratings_enabled: boolean
  video_ad_content: null | string
  seo_title: string
  country: Country
  instructions: Instruction[]
  language: Language
  brand_id: number | null
  aspect_ratio: AspectRatio
  description: string
  inspired_by_url: null
  total_time_minutes: number | null
  nutrition_visibility: NutritionVisibility
  facebook_posts: any[]
  beauty_url: null | string
  total_time_tier: TotalTimeTier
  yields: string
  original_video_url: null | string
  updated_at: number
  renditions: Rendition[]
  created_at: number
  approved_at: number
  user_ratings: UserRatings
  id: number
}

export enum AspectRatio {
  The11 = '1:1',
  The169 = '16:9'
}

export interface Brand {
  image_url?: string
  name: null | string
  id?: number
  slug?: string
  type?: BrandType
}

export enum BrandType {
  Brand = 'brand',
  Community = 'community',
  Internal = 'internal'
}

export interface Compilation {
  facebook_posts: any[]
  canonical_id: string
  id: number
  aspect_ratio: AspectRatio
  keywords: null
  created_at: number
  language: Language
  video_url: string
  buzz_id: null
  video_id: number
  show: Show[]
  name: string
  beauty_url: null
  slug: string
  promotion: Promotion
  country: Country
  is_shoppable: boolean
  description: null
  draft_status: DraftStatus
  thumbnail_url: string
  thumbnail_alt_text: string
  approved_at: number
}

export enum Country {
  Us = 'US'
}

export enum DraftStatus {
  Published = 'published'
}

export enum Language {
  Eng = 'eng'
}

export enum Promotion {
  Full = 'full'
}

export interface Show {
  name: Name
  id: number
}

export enum Name {
  Tasty = 'Tasty',
  Tasty101 = 'Tasty 101'
}

export interface Instruction {
  start_time: number
  appliance: null | string
  end_time: number
  temperature: number | null
  id: number
  position: number
  display_text: string
}

export interface Nutrition {
  carbohydrates?: number
  fiber?: number
  updated_at?: Date
  protein?: number
  fat?: number
  calories?: number
  sugar?: number
}

export enum NutritionVisibility {
  Auto = 'auto'
}

export interface Rendition {
  container: Container
  url: string
  duration: number
  bit_rate: number | null
  width: number
  height: number
  poster_url: string
  file_size: number | null
  content_type: ContentType
  aspect: Aspect
  minimum_bit_rate: number | null
  name: string
  maximum_bit_rate: number | null
}

export enum Aspect {
  Landscape = 'landscape',
  Square = 'square'
}

export enum Container {
  Mp4 = 'mp4',
  Ts = 'ts'
}

export enum ContentType {
  ApplicationVndAppleMpegurl = 'application/vnd.apple.mpegurl',
  VideoMp4 = 'video/mp4'
}

export interface Section {
  position: number
  components: Component[]
  name: null | string
}

export interface Component {
  raw_text: string
  extra_comment: string
  ingredient: Ingredient
  id: number
  position: number
  measurements: Measurement[]
}

export interface Ingredient {
  display_plural: string
  id: number
  display_singular: string
  updated_at: number
  name: string
  created_at: number
}

export interface Measurement {
  unit: Unit
  quantity: string
  id: number
}

export interface Unit {
  name: string
  display_plural: string
  display_singular: string
  abbreviation: string
  system: System
}

export enum System {
  Imperial = 'imperial',
  Metric = 'metric',
  None = 'none'
}

export enum ServingsNounPlural {
  MiniCheesecakes = 'mini cheesecakes',
  Rolls = 'rolls',
  Sandwiches = 'sandwiches',
  Servings = 'servings'
}

export interface Tag {
  name: string
  id: number
  display_name: string
  type: TagType
}

export enum TagType {
  Appliance = 'appliance',
  Cuisine = 'cuisine',
  Dietary = 'dietary',
  Difficulty = 'difficulty',
  DishStyle = 'dish_style',
  Equipment = 'equipment',
  FeaturePage = 'feature_page',
  Holiday = 'holiday',
  Meal = 'meal',
  Method = 'method',
  Occasion = 'occasion',
  Seasonal = 'seasonal'
}

export interface Topic {
  name: string
  slug: string
}

export interface TotalTimeTier {
  tier: Tier
  display_tier: DisplayTier
}

export enum DisplayTier {
  Under15Minutes = 'Under 15 minutes',
  Under30Minutes = 'Under 30 minutes'
}

export enum Tier {
  Under15_Minutes = 'under_15_minutes',
  Under30_Minutes = 'under_30_minutes'
}

export interface UserRatings {
  count_negative: number
  count_positive: number
  score: number | null
}
