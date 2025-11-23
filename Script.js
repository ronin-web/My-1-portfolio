
        // التنقل المتنقل
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const header = document.getElementById('header');
        const navbar = document.querySelector('.navbar');

        let lastScrollY = window.scrollY;

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // إغلاق القائمة عند النقر على رابط
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // التحكم في ظهور وإخفاء الشريط العلوي
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
                navbar.classList.add('scrolled');
                
                if (window.scrollY > lastScrollY) {
                    header.classList.add('hidden');
                } else {
                    header.classList.remove('hidden');
                }
            } else {
                header.classList.remove('scrolled', 'hidden');
                navbar.classList.remove('scrolled');
            }
            
            lastScrollY = window.scrollY;
            
            // تفعيل ظهور الأقسام عند التمرير
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight * 0.85) {
                    section.classList.add('visible');
                    
                    // تفعيل أشرطة المهارات
                    if (section.id === 'about') {
                        const skillLevels = document.querySelectorAll('.skill-level');
                        skillLevels.forEach(level => {
                            const width = level.getAttribute('data-level') + '%';
                            level.style.width = width;
                        });
                    }
                    
                    // تفعيل بطاقات المشاريع
                    if (section.id === 'projects') {
                        const projectCards = document.querySelectorAll('.project-card');
                        projectCards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('visible');
                            }, index * 200);
                        });
                    }
                }
            });
        });

        // تصفية المشاريع
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // إزالة النشاط من جميع الأزرار
                filterBtns.forEach(b => b.classList.remove('active'));
                // إضافة النشاط للزر المحدد
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, 200);
                    } else {
                        card.classList.remove('visible');
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 500);
                    }
                });
            });
        });

        // نموذج التواصل
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('شكراً على رسالتك! سأتواصل معك قريباً.');
            contactForm.reset();
        });

        // تفعيل الرسوم المتحركة للعناصر عند التحميل
        window.addEventListener('load', () => {
            document.querySelector('.hero').classList.add('visible');
            
            // تفعيل أشرطة المهارات إذا كان قسم about مرئياً
            const aboutSection = document.getElementById('about');
            if (aboutSection.getBoundingClientRect().top < window.innerHeight) {
                aboutSection.classList.add('visible');
                const skillLevels = document.querySelectorAll('.skill-level');
                skillLevels.forEach(level => {
                    const width = level.getAttribute('data-level') + '%';
                    level.style.width = width;
                });
            }
        });