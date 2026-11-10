/**
 * Lightweight, high-performance Lottie JSON vector animations
 * Specifically designed for Agency Services and Feature Highlights
 * Vector animations render in crisp SVG with ultra-smooth loops.
 */

// 1. Food, Bakery & Coffee (Warm, steaming bakery / coffee icon)
export const bakeryLottie = {
  v: "5.5.7",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Bakery",
  ddd: 0,
  assets: [],
  layers: [
    // Steam 1
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Steam1",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [80] },
            { t: 30, s: [80], e: [0] },
            { t: 60, s: [0] }
          ]
        },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [42, 38, 0], e: [42, 22, 0] },
            { t: 60, s: [42, 22, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [4, 12] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 2 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.54, 0.71, 0.97, 1] }, // #8AB4F8
              o: { a: 0, k: 100 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    },
    // Steam 2
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Steam2",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 15, s: [0], e: [90] },
            { t: 45, s: [90], e: [0] },
            { t: 60, s: [0] }
          ]
        },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 15, s: [58, 38, 0], e: [58, 20, 0] },
            { t: 60, s: [58, 20, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [4, 14] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 2 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.1, 0.45, 0.91, 1] }, // #1A73E8
              o: { a: 0, k: 100 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    },
    // Cup Body
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "CupBody",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [50, 58, 0], e: [50, 56, 0] },
            { t: 30, s: [50, 56, 0], e: [50, 58, 0] },
            { t: 60, s: [50, 58, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [100, 100, 100], e: [103, 98, 100] },
            { t: 30, s: [103, 98, 100], e: [100, 100, 100] },
            { t: 60, s: [100, 100, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [46, 34] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 8 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.1, 0.45, 0.91, 1] }, // #1A73E8
              o: { a: 0, k: 90 }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.54, 0.71, 0.97, 1] },
              o: { a: 0, k: 100 },
              w: 3
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        },
        // Saucer
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [56, 6] },
              p: { a: 0, k: [0, 20] },
              r: { a: 0, k: 3 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1] },
              o: { a: 0, k: 80 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    }
  ]
};

// 2. Events & Festas (Party & Sparkling celebration)
export const eventsLottie = {
  v: "5.5.7",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Events",
  ddd: 0,
  assets: [],
  layers: [
    // Central Star Pulse
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "MainStar",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [180] },
            { t: 60, s: [360] }
          ]
        },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [90, 90, 100], e: [115, 115, 100] },
            { t: 30, s: [115, 115, 100], e: [90, 90, 100] },
            { t: 60, s: [90, 90, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sr",
              sy: 1,
              pt: { a: 0, k: 4 },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 0 },
              ir: { a: 0, k: 10 },
              is: { a: 0, k: 0 },
              or: { a: 0, k: 28 },
              os: { a: 0, k: 0 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.98, 0.74, 0.02, 1] }, // #FBBC05 (Gold/Warm)
              o: { a: 0, k: 95 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    },
    // Sparkle 1
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Sparkle1",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [20], e: [100] },
            { t: 30, s: [100], e: [20] },
            { t: 60, s: [20] }
          ]
        },
        r: { a: 0, k: 45 },
        p: { a: 0, k: [25, 25, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [50, 50, 100], e: [100, 100, 100] },
            { t: 30, s: [100, 100, 100], e: [50, 50, 100] },
            { t: 60, s: [50, 50, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sr",
              sy: 1,
              pt: { a: 0, k: 4 },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 0 },
              ir: { a: 0, k: 4 },
              is: { a: 0, k: 0 },
              or: { a: 0, k: 12 },
              os: { a: 0, k: 0 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.54, 0.71, 0.97, 1] },
              o: { a: 0, k: 100 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    },
    // Sparkle 2
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Sparkle2",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 15, s: [30], e: [100] },
            { t: 45, s: [100], e: [30] },
            { t: 60, s: [30] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [76, 74, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 15, s: [60, 60, 100], e: [110, 110, 100] },
            { t: 45, s: [110, 110, 100], e: [60, 60, 100] },
            { t: 60, s: [60, 60, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              s: { a: 0, k: [12, 12] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1] },
              o: { a: 0, k: 90 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    }
  ]
};

// 3. Restaurant & Dining (Cloche / Gourmet plate lift)
export const restaurantLottie = {
  v: "5.5.7",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Restaurant",
  ddd: 0,
  assets: [],
  layers: [
    // Cloche Dome
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Dome",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [50, 48, 0], e: [50, 38, 0] },
            { t: 30, s: [50, 38, 0], e: [50, 48, 0] },
            { t: 60, s: [50, 48, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              s: { a: 0, k: [46, 40] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.1, 0.45, 0.91, 1] },
              o: { a: 0, k: 90 }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.54, 0.71, 0.97, 1] },
              o: { a: 0, k: 100 },
              w: 3
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        },
        // Handle Top Knob
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              s: { a: 0, k: [10, 10] },
              p: { a: 0, k: [0, -22] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.98, 0.74, 0.02, 1] },
              o: { a: 0, k: 100 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    },
    // Platter Tray (Bottom)
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Tray",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 70, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [60, 6] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 3 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1] },
              o: { a: 0, k: 95 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    }
  ]
};

// 4. Commercial & Local Services (Building / Location pulse)
export const commerceLottie = {
  v: "5.5.7",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Commerce",
  ddd: 0,
  assets: [],
  layers: [
    // Pulse Ring
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "PulseRing",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [100], e: [0] },
            { t: 50, s: [0] },
            { t: 60, s: [0] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [50, 50, 100], e: [130, 130, 100] },
            { t: 50, s: [130, 130, 100] },
            { t: 60, s: [50, 50, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              s: { a: 0, k: [40, 40] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.1, 0.45, 0.91, 1] },
              o: { a: 0, k: 80 },
              w: 3
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    },
    // Store Pin / Building Box
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Storefront",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [50, 50, 0], e: [50, 46, 0] },
            { t: 30, s: [50, 46, 0], e: [50, 50, 0] },
            { t: 60, s: [50, 50, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [38, 36] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 6 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.1, 0.45, 0.91, 1] },
              o: { a: 0, k: 90 }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.54, 0.71, 0.97, 1] },
              o: { a: 0, k: 100 },
              w: 3
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        },
        // Door / Window
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [14, 16] },
              p: { a: 0, k: [0, 8] },
              r: { a: 0, k: 2 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1] },
              o: { a: 0, k: 90 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    }
  ]
};

// 5. WhatsApp Pulse Animation
export const whatsappLottie = {
  v: "5.5.7",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "WhatsAppPulse",
  ddd: 0,
  assets: [],
  layers: [
    // Outer Ripple
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Ripple",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [70], e: [0] },
            { t: 40, s: [0] },
            { t: 60, s: [70] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [70, 70, 100], e: [120, 120, 100] },
            { t: 40, s: [120, 120, 100] },
            { t: 60, s: [70, 70, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              s: { a: 0, k: [44, 44] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.15, 0.83, 0.4, 1] }, // #25D366
              o: { a: 0, k: 100 },
              w: 3
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    },
    // Main Bubble
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Bubble",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [100, 100, 100], e: [108, 108, 100] },
            { t: 30, s: [108, 108, 100], e: [100, 100, 100] },
            { t: 60, s: [100, 100, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              s: { a: 0, k: [38, 38] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.15, 0.83, 0.4, 1] },
              o: { a: 0, k: 100 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        },
        // Inner Dot / Phone Accent
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              s: { a: 0, k: [12, 12] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1] },
              o: { a: 0, k: 95 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    }
  ]
};

// 6. Lightning / Speed Animation (Under 1 second loading)
export const speedLottie = {
  v: "5.5.7",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "SpeedBolt",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Bolt",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [95, 95, 100], e: [112, 112, 100] },
            { t: 30, s: [112, 112, 100], e: [95, 95, 100] },
            { t: 60, s: [95, 95, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sr",
              sy: 1,
              pt: { a: 0, k: 3 },
              p: { a: 0, k: [0, -6] },
              r: { a: 0, k: 0 },
              ir: { a: 0, k: 8 },
              is: { a: 0, k: 0 },
              or: { a: 0, k: 22 },
              os: { a: 0, k: 0 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.98, 0.74, 0.02, 1] }, // Gold
              o: { a: 0, k: 100 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        },
        {
          ty: "gr",
          it: [
            {
              ty: "sr",
              sy: 1,
              pt: { a: 0, k: 3 },
              p: { a: 0, k: [0, 8] },
              r: { a: 0, k: 180 },
              ir: { a: 0, k: 8 },
              is: { a: 0, k: 0 },
              or: { a: 0, k: 22 },
              os: { a: 0, k: 0 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.1, 0.45, 0.91, 1] }, // Blue
              o: { a: 0, k: 100 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    }
  ]
};

// 7. Shield Security SSL Animation
export const securityLottie = {
  v: "5.5.7",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "SecurityShield",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Shield",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [100, 100, 100], e: [106, 106, 100] },
            { t: 30, s: [106, 106, 100], e: [100, 100, 100] },
            { t: 60, s: [100, 100, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [40, 42] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 10 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.1, 0.45, 0.91, 1] },
              o: { a: 0, k: 80 }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.2, 0.66, 0.33, 1] }, // #34A853 (Green lock)
              o: { a: 0, k: 100 },
              w: 3.5
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        },
        // Inner Checkmark
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              s: { a: 0, k: [14, 14] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1] },
              o: { a: 0, k: 100 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    }
  ]
};

// 8. GPS / Map Pin Radar Animation
export const mapPinLottie = {
  v: "5.5.7",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "MapPin",
  ddd: 0,
  assets: [],
  layers: [
    // Radar Wave
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Radar",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [80], e: [0] },
            { t: 45, s: [0] },
            { t: 60, s: [80] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 68, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [40, 20, 100], e: [120, 60, 100] },
            { t: 45, s: [120, 60, 100] },
            { t: 60, s: [40, 20, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              s: { a: 0, k: [40, 40] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.92, 0.26, 0.21, 1] }, // #EA4335
              o: { a: 0, k: 90 },
              w: 3
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    },
    // Pin Body
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Pin",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [50, 44, 0], e: [50, 38, 0] },
            { t: 30, s: [50, 38, 0], e: [50, 44, 0] },
            { t: 60, s: [50, 44, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              s: { a: 0, k: [32, 32] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.92, 0.26, 0.21, 1] }, // #EA4335
              o: { a: 0, k: 100 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        },
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              s: { a: 0, k: [12, 12] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1] },
              o: { a: 0, k: 100 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    }
  ]
};
