import { Ratelimit } from "@upstash/ratelimit";
import redis from "@/database/redis";

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(2, "30 s"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

export default ratelimit;
